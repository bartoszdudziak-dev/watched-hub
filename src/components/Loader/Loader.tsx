import { LoaderCircle } from 'lucide-react';

type LoaderProps = { size?: 'sm' | 'md' | 'lg' };

function Loader({ size = 'md' }: LoaderProps) {
  const loaderSize = {
    sm: 'size-12',
    md: 'size-16',
    lg: 'size-20',
  };

  return (
    <div className="my-16">
      <LoaderCircle className={`mx-auto animate-spin ${loaderSize[size]}`} />
    </div>
  );
}

export default Loader;
