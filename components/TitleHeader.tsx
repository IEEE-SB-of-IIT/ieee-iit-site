interface TitleHeaderProps {
  title: string;
}
const TitleHeader: React.FC<TitleHeaderProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center gap-5 mb-10">
      <div>
        <h1 className="font-semibold md:text-3xl text-2xl text-center">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;
