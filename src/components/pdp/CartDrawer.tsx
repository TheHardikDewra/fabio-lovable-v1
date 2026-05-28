import { X, Tag, Box, ShieldCheck, Lock, FlaskConical, TrendingUp, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { BOTTLE_IMG, BRAND } from "./data";

type Props = {
  open: boolean;
  onClose: () => void;
};

const FREE_SHIPPING_THRESHOLD = 100;

export function CartDrawer({ open, onClose }: Props) {
  const { items, updateQty, removeItem, subtotal, compareTotal, totalItems } = useCart();
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const discountPct = compareTotal > 0 ? Math.round(((compareTotal - subtotal) / compareTotal) * 100) : 0;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
      {/* Drawer */}
      <aside
        role="dialog"
        aria-label="Cart"
        className={`fixed inset-y-0 right-0 z-50 w-full sm:max-w-md bg-background shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-border">
          <h2 className="text-lg font-extrabold text-foreground">Your Cart ({totalItems})</h2>
          <button
            onClick={onClose}
            aria-label="Close cart"
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-muted transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free shipping progress */}
        <div className="px-4 py-3 bg-muted/40 border-b border-border">
          {remaining > 0 ? (
            <p className="text-[13px] text-center text-foreground mb-2">
              You're <span className="font-extrabold text-rose-deep">${remaining.toFixed(2)}</span> away from{" "}
              <span className="font-extrabold text-emerald-600">FREE SHIPPING!</span>
            </p>
          ) : (
            <p className="text-[13px] text-center text-emerald-700 font-extrabold mb-2">
              🎉 You unlocked FREE SHIPPING!
            </p>
          )}
          <div className="h-2 rounded-full bg-foreground/10 overflow-hidden">
            <div
              className="h-full bg-emerald-600 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Discount banner */}
        <div className="bg-foreground text-background text-center py-2.5 text-[13px] font-extrabold uppercase tracking-wide">
          🔥 Memorial Day Discount Auto-Applied
        </div>

        {/* Content */}
        <div className="flex-1 min-h-0 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <ShoppingBag className="w-12 h-12 text-muted-foreground mb-3" strokeWidth={1.5} />
              <p className="text-sm font-semibold text-muted-foreground">Your cart is empty</p>
              <p className="text-xs text-muted-foreground mt-1">Add a bundle to get started</p>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="w-16 h-16 rounded-xl bg-soft-pink flex-shrink-0 flex items-center justify-center">
                    <img src={item.image || BOTTLE_IMG} alt={item.name} className="w-14 h-14 object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-extrabold text-foreground text-[14px] leading-tight">{BRAND}</div>
                    <div className="text-[11.5px] text-muted-foreground leading-tight">{item.name}</div>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="font-extrabold text-foreground text-[15px]">${item.total.toFixed(2)}</span>
                      <span className="text-[11.5px] text-muted-foreground line-through">${item.totalCompare.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center rounded-full border border-border bg-card h-7 self-start">
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      className="w-7 h-7 flex items-center justify-center text-foreground hover:bg-muted rounded-l-full"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-6 text-center text-[12px] font-bold">{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="w-7 h-7 flex items-center justify-center text-foreground hover:bg-muted rounded-r-full"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}

              <div className="inline-flex items-center gap-1.5 border-2 border-dashed border-rose-deep/40 text-rose-deep px-2.5 py-1 rounded-md text-[11px] font-bold">
                <Tag className="w-3 h-3" /> MEMORIAL{discountPct}
              </div>

              {/* Subscribe upsell */}
              <div className="rounded-xl bg-soft-pink/60 border border-rose-deep/20 p-3.5 relative">
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-amber-300 text-foreground text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  Most Popular
                </span>
                <h3 className="text-center font-extrabold text-foreground text-[15px] mt-0.5 mb-2">
                  Subscribe & Save an Extra 25%
                </h3>
                <ul className="space-y-1 text-[12px] text-foreground/85">
                  <li className="flex items-start gap-2"><Tag className="w-3 h-3 mt-1 text-rose-deep flex-shrink-0" strokeWidth={2.5}/> Instantly save more off your first order</li>
                  <li className="flex items-start gap-2"><Box className="w-3 h-3 mt-1 text-rose-deep flex-shrink-0" strokeWidth={2.5}/> Our most flexible plan — cancel anytime</li>
                  <li className="flex items-start gap-2"><ShieldCheck className="w-3 h-3 mt-1 text-rose-deep flex-shrink-0" strokeWidth={2.5}/> Backed by 60-Day Guarantee</li>
                </ul>
                <button className="mt-2.5 w-full bg-rose-deep text-primary-foreground rounded-full py-2.5 text-[12.5px] font-extrabold uppercase tracking-wide hover:opacity-95 transition">
                  Upgrade and Save
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer / checkout */}
        <div className="border-t border-border bg-background p-4 space-y-3">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-base font-extrabold text-foreground">Subtotal</span>
              <div className="flex items-center gap-2">
                {discountPct > 0 && (
                  <span className="bg-amber-300 text-foreground text-[11px] font-extrabold px-2 py-0.5 rounded-full">
                    {discountPct}% OFF
                  </span>
                )}
                <span className="text-[12px] text-muted-foreground line-through">${compareTotal.toFixed(2)}</span>
                <span className="text-lg font-extrabold text-foreground">${subtotal.toFixed(2)}</span>
              </div>
            </div>
            {compareTotal > subtotal && (
              <div className="flex items-center justify-between rounded-md bg-emerald-50 border border-emerald-200 px-2.5 py-1.5">
                <span className="text-[11.5px] font-bold text-emerald-800 uppercase tracking-wide">You Save</span>
                <span className="text-[13px] font-extrabold text-emerald-700">
                  ${(compareTotal - subtotal).toFixed(2)}
                </span>
              </div>
            )}
          </div>

          <button
            disabled={items.length === 0}
            className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-b from-rose-deep to-[#a8364a] text-white py-4 px-4 shadow-[0_16px_36px_-10px_rgba(190,55,75,0.65)] ring-1 ring-rose-deep/60 hover:-translate-y-0.5 hover:shadow-[0_22px_44px_-10px_rgba(190,55,75,0.8)] active:translate-y-0 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/80 to-transparent" />
            <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/15" />
            <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/25 blur-md transition-transform duration-700 ease-out group-hover:translate-x-[500%]" />
            <span className="relative flex items-center justify-center gap-2 whitespace-nowrap">
              <span className="text-[15px] font-extrabold tracking-[0.16em] uppercase leading-none">
                Secure Checkout
              </span>
              <Lock className="w-4 h-4" strokeWidth={2.5} />
            </span>
          </button>

          <div className="grid grid-cols-3 gap-2 pt-1">
            <div className="flex flex-col items-center text-center gap-1">
              <ShieldCheck className="w-4 h-4 text-rose-deep flex-shrink-0" strokeWidth={2.4} />
              <span className="text-[10px] font-semibold text-foreground/75 leading-tight">60-Day Guarantee</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1">
              <TrendingUp className="w-4 h-4 text-rose-deep flex-shrink-0" strokeWidth={2.4} />
              <span className="text-[10px] font-semibold text-foreground/75 leading-tight">550k+ Sold This Month</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1">
              <FlaskConical className="w-4 h-4 text-rose-deep flex-shrink-0" strokeWidth={2.4} />
              <span className="text-[10px] font-semibold text-foreground/75 leading-tight">Clinically Tested</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
