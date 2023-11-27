type Card2Props = {
  className?: string;
};

export default function Card2({ className }: Card2Props) {
  return (
    <div
      className={`border-1 z-10 flex flex-col gap-1 rounded-3xl border border-orange-600 p-4 text-orange-600 ${className}`}
    >
      <h2>Dasar Pemrograman</h2>
      <p>
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM
        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM
        LOREM IPSUMLOREM IPSUM LOREM IPSUM LOREM IPSUM
      </p>
    </div>
  );
}
