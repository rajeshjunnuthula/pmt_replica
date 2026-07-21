import Button from "./Button";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

function PageHeader({
  title,
  subtitle,
  buttonText,
  onButtonClick,
}: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-4xl font-bold">
          {title}
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mt-2">
          {subtitle}
        </p>
      </div>

      {buttonText && (
        <Button onClick={onButtonClick}>{buttonText}</Button>
      )}
    </div>
  );
}

export default PageHeader;