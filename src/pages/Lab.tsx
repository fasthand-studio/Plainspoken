import LabContent from "@/components/LabContent";

export default function Lab() {
  return (
    <div className="px-4 pt-[calc(5rem+env(safe-area-inset-top,0px))] pb-12">
      <div className="max-w-[1100px] mx-auto">
        <LabContent />
      </div>
    </div>
  );
}
