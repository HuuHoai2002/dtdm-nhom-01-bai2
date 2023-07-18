import { Progress } from "@nextui-org/react";

interface AuthLoadingProps {
  isLoading: boolean;
}

const AuthLoading: React.FC<AuthLoadingProps> = () => {
  return (
    <div>
      <Progress
        size="sm"
        isIndeterminate
        aria-label="Loading..."
        className="max-w-md"
      />
    </div>
  );
};

export default AuthLoading;
