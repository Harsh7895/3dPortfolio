import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <span className="w-10 h-10 border-4 border-t-transparent border-white rounded-full animate-spin"></span>
        <p className="text-sm text-white font-bold mt-4">
          {progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  );
};

export default Loader;
