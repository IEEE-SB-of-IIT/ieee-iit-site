import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "./generated/prisma/client/client.js";
import { hash } from "bcryptjs";
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ProjectData {
  slug: string;
  name: string;
  description: string;
  date: string;
  society: string;
  coverImage: string;
  headerImage?: string;
  images: string[];
}

function loadProjects(): ProjectData[] {
  const filePath = path.resolve(__dirname, "..", "constants", "projectinto.ts");
  let content = fs.readFileSync(filePath, "utf-8");

  // Remove TypeScript import and type annotations
  content = content.replace(/import.*from.*;\n?/g, "");
  content = content.replace(
    /export const projects:\s*Project\[\]\s*=/,
    "var projects ="
  );

  // Evaluate and extract
  const fn = new Function(content + "\nreturn projects;");
  return fn();
}

function parseEventDate(dateString: string): Date {
  const d = new Date(dateString);
  if (isNaN(d.getTime())) return new Date();
  return d;
}

async function main() {
  const adapter = new PrismaBetterSqlite3({
    url: process.env.DATABASE_URL || "file:./dev.db",
  });
  const prisma = new PrismaClient({ adapter });

  try {
    // 1. Create default admin user
    const hashedPassword = await hash("changeme123", 12);
    await prisma.user.upsert({
      where: { email: "admin@ieeeiit.lk" },
      update: {},
      create: {
        name: "Admin",
        email: "admin@ieeeiit.lk",
        hashedPassword,
      },
    });
    console.log("Created admin user: admin@ieeeiit.lk / changeme123");

    // 2. Seed all events
    const projects = loadProjects();
    let count = 0;
    for (const project of projects) {
      await prisma.event.upsert({
        where: { slug: project.slug },
        update: {},
        create: {
          slug: project.slug,
          name: project.name,
          description: project.description,
          date: parseEventDate(project.date),
          startTime: null,
          endTime: null,
          isAllDay: true,
          society: project.society,
          coverImage: project.coverImage,
          headerImage: project.headerImage ?? null,
          images: JSON.stringify(project.images),
          location: "Informatics Institute of Technology",
          registrationLink: null,
        },
      });
      count++;
    }
    console.log(`Seeded ${count} events.`);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
