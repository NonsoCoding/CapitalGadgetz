interface ICopyRightProps {
  year: number;
}

const CopyRight = ({ year }: ICopyRightProps) => {
  return (
    <section className="w-full">
      <div className="w-full justify-center flex items-center py-7 bg-[#3498DB]">
        <p className="font-semibold text-white">
          @{year} CapitalGadgetz. Shop With Us
        </p>
      </div>
    </section>
  );
};

export default CopyRight;
