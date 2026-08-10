import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const CYAN = "#00B3E4";

type StatusNoticeDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
};

/**
 * Lightweight modal for temporary status messages
 * (donate preparing, pre-register opening date, etc.).
 */
export default function StatusNoticeDialog({
  open,
  onOpenChange,
  eyebrow,
  title,
  body,
  cta,
}: StatusNoticeDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md border-0 bg-white p-0 sm:rounded-3xl overflow-hidden shadow-[0_30px_80px_-40px_rgba(0,61,79,0.45)]">
        <div
          className="h-1.5 w-full"
          style={{
            background: `linear-gradient(90deg, ${CYAN} 0%, #0090B8 100%)`,
          }}
        />
        <div className="px-8 pt-7 pb-8">
          <DialogHeader className="space-y-3 text-center sm:text-center">
            <p
              className="text-xs font-semibold tracking-[0.18em] uppercase"
              style={{ color: CYAN }}
            >
              {eyebrow}
            </p>
            <DialogTitle className="font-scripture text-2xl sm:text-[1.7rem] font-bold text-[#201E1F] leading-snug ws-text-balance">
              {title}
            </DialogTitle>
            <DialogDescription className="text-base text-gray-600 leading-relaxed whitespace-pre-line ws-text-pretty pt-1">
              {body}
            </DialogDescription>
          </DialogHeader>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="mt-8 w-full py-3.5 rounded-full text-white font-semibold text-base shadow-md hover:opacity-95 transition-opacity"
            style={{ background: CYAN }}
          >
            {cta}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
