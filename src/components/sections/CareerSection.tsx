import React, { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  GraduationCap,
  Wifi,
  WifiOff,
  Printer,
  Database,
  RefreshCw,
} from 'lucide-react';
import { getCareerData } from '../../data/careerData';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';
import { GridCrosshairs } from '../common/KineticPrimitives';

interface PosOrder {
  id: string;
  item: string;
  price: number;
  time: string;
  status: 'SYNCED' | 'QUEUED_SQLITE';
}

const POS_QUICK_ITEMS = [
  { id: 'coffee', labelVi: 'Cà phê sữa đá', labelEn: 'Iced Milk Coffee', price: 29000 },
  { id: 'banhmi', labelVi: 'Bánh mì thịt nướng', labelEn: 'Grilled Pork Banh Mi', price: 25000 },
  { id: 'tea', labelVi: 'Trà đào cam sả', labelEn: 'Peach Lemongrass Tea', price: 32000 },
];

export const CareerSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].career;
  const careerItems = getCareerData(language);
  const isVi = language === 'vi';

  // Live Lab C State: Finviet POS Offline Queue & ESC/POS Receipt
  const [isOnline, setIsOnline] = useState(false);
  const [selectedItemIdx, setSelectedItemIdx] = useState(0);
  const [orderSeq, setOrderSeq] = useState(1042);
  const [orders, setOrders] = useState<PosOrder[]>([
    {
      id: 'POS-1041',
      item: 'Cà phê sữa đá',
      price: 29000,
      time: '09:14:08',
      status: 'QUEUED_SQLITE',
    },
  ]);
  const [syncFlash, setSyncFlash] = useState<string | null>(null);

  const pendingCount = orders.filter((o) => o.status === 'QUEUED_SQLITE').length;
  const latestOrder = orders[0];

  const handleToggleNetwork = () => {
    const nextOnline = !isOnline;
    setIsOnline(nextOnline);
    if (nextOnline && pendingCount > 0) {
      const count = pendingCount;
      setOrders((prev) => prev.map((o) => ({ ...o, status: 'SYNCED' })));
      setSyncFlash(
        isVi
          ? `✓ ĐỒNG BỘ ${count} ĐƠN TỪ SQLITE -> SERVER (200 OK)`
          : `✓ FLUSHED ${count} QUEUED ORDERS -> SERVER (200 OK)`
      );
      setTimeout(() => setSyncFlash(null), 3500);
    }
  };

  const handleCreatePosOrder = () => {
    const item = POS_QUICK_ITEMS[selectedItemIdx];
    const now = new Date();
    const timeStr = now.toTimeString().slice(0, 8);
    const nextId = `POS-${orderSeq}`;
    setOrderSeq((s) => s + 1);
    setSyncFlash(null);

    const newOrder: PosOrder = {
      id: nextId,
      item: isVi ? item.labelVi : item.labelEn,
      price: item.price,
      time: timeStr,
      status: isOnline ? 'SYNCED' : 'QUEUED_SQLITE',
    };
    setOrders((prev) => [newOrder, ...prev.slice(0, 3)]);
  };

  const formatVnd = (n: number) => `${n.toLocaleString('vi-VN')}đ`;

  return (
    <section id="experience" className="border-b border-[var(--line)] bg-[var(--bg)] relative">
      <div className="swiss-frame relative">
        <GridCrosshairs corners={['bl', 'br']} />

        {/* Section Header */}
        <div className="px-5 sm:px-8 lg:px-10 py-10 sm:py-14 border-b border-[var(--line)] reveal">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest mb-4">
            <span className="px-2 py-0.5 bg-[var(--bg-invert)] text-[var(--text-invert)] font-bold">02</span>
            <span className="text-[var(--accent)] font-bold">// {t.badge}</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <h2 className="lg:col-span-8 font-heading font-bold uppercase text-[clamp(2.1rem,5vw,4.5rem)] leading-[0.94] tracking-[-0.035em] text-[var(--text-primary)]">
              {t.title}
            </h2>
            <p className="lg:col-span-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>

        {/* Career Entries */}
        {careerItems.map((item, cIdx) => {
          const isFinviet = item.company.toLowerCase().includes('finviet');
          const isHahalolo = item.company.toLowerCase().includes('hahalolo');

          return (
            <article key={item.company} className="border-b border-[var(--line)] reveal">
              {/* Company Top Bar */}
              <div className="px-5 sm:px-8 lg:px-10 py-6 border-b border-[var(--line)] bg-[var(--bg-elevated)] flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-baseline gap-4 flex-wrap">
                  <span className="font-mono text-xs font-bold text-[var(--accent)]">
                    WORK.0{cIdx + 1}
                  </span>
                  <h3 className="font-heading font-bold uppercase text-2xl sm:text-4xl tracking-tight text-[var(--text-primary)]">
                    {item.company}
                  </h3>
                  <span className="text-xs font-mono uppercase px-2.5 py-0.5 border border-[var(--line-strong)] text-[var(--text-secondary)]">
                    {item.period}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                    {item.role}
                  </span>
                  {item.playStoreUrl && (
                    <a
                      href={item.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="pointer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[var(--accent)] text-white hover:bg-[var(--bg-invert)] hover:text-[var(--text-invert)] text-xs font-mono font-bold uppercase tracking-wider transition-colors"
                    >
                      <span>GOOGLE PLAY · ECO POS</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* FINVIET LAYOUT: Split Left Details + Right LIVE LAB C (POS Offline & ESC/POS Simulator) */}
              {isFinviet ? (
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Left 7 Cols: Contributions */}
                  <div className="lg:col-span-7 lg:border-r border-[var(--line)] p-5 sm:p-8 lg:p-10 flex flex-col justify-between gap-6">
                    <div>
                      <p className="font-display italic text-lg sm:text-xl text-[var(--text-primary)] mb-3">
                        {item.project}
                      </p>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                        {item.summary}
                      </p>

                      <h4 className="text-[11px] font-mono uppercase tracking-widest text-[var(--accent)] font-bold mb-3">
                        // {t.keyContributionsLabel}
                      </h4>
                      <ul className="space-y-2.5">
                        {item.achievements.map((ach, achIdx) => (
                          <li
                            key={achIdx}
                            className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed flex items-start gap-2.5"
                          >
                            <Check className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-5 border-t border-[var(--line)] flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono uppercase px-2 py-1 bg-[var(--bg-subtle)] text-[var(--text-primary)] border border-[var(--line)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right 5 Cols: LIVE LAB C — POS Offline Queue & ESC/POS Printer */}
                  <div className="lg:col-span-5 border-t lg:border-t-0 border-[var(--line)] bg-[var(--bg-elevated)] p-5 sm:p-8 flex flex-col justify-between gap-5">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] font-bold">
                          LAB.C // POS OFFLINE + ESC/POS
                        </span>
                        <span className="text-[10px] font-mono text-[var(--text-muted)]">
                          SUNMI / IMIN SIM
                        </span>
                      </div>

                      <h4 className="font-heading font-bold text-base uppercase tracking-tight text-[var(--text-primary)] mb-4">
                        {isVi
                          ? 'Thử ngắt Wi-Fi cửa hàng & bấm in bill nhiệt'
                          : 'Simulate Wi-Fi blackout & thermal ESC/POS print'}
                      </h4>

                      {/* Network Toggle Bar */}
                      <button
                        type="button"
                        onClick={handleToggleNetwork}
                        data-cursor="pointer"
                        className={`w-full mb-4 px-4 py-2.5 border flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                          isOnline
                            ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                            : 'border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]'
                        }`}
                      >
                        <span className="inline-flex items-center gap-2">
                          {isOnline ? <Wifi className="w-4 h-4" /> : <WifiOff className="w-4 h-4" />}
                          <span>
                            {isOnline
                              ? (isVi ? 'WI-FI QUẦY: ONLINE' : 'STORE WI-FI: ONLINE')
                              : (isVi ? 'WI-FI QUẦY: ĐỨT MẠNG (OFFLINE)' : 'STORE WI-FI: OFFLINE')}
                          </span>
                        </span>
                        <span className="text-[10px] underline">
                          {isOnline ? (isVi ? 'Ngắt mạng' : 'Cut Wi-Fi') : (isVi ? 'Bật lại mạng' : 'Reconnect')}
                        </span>
                      </button>

                      {/* Item Selector */}
                      <div className="grid grid-cols-3 border border-[var(--line-strong)] mb-3">
                        {POS_QUICK_ITEMS.map((prod, idx) => (
                          <button
                            key={prod.id}
                            type="button"
                            onClick={() => setSelectedItemIdx(idx)}
                            data-cursor="pointer"
                            className={`p-2 text-left border-r last:border-r-0 border-[var(--line)] transition-colors cursor-pointer ${
                              selectedItemIdx === idx
                                ? 'bg-[var(--bg-invert)] text-[var(--text-invert)]'
                                : 'bg-[var(--bg)] text-[var(--text-secondary)] hover:bg-[var(--bg-subtle)]'
                            }`}
                          >
                            <span className="text-[10px] font-medium block truncate">
                              {isVi ? prod.labelVi : prod.labelEn}
                            </span>
                            <span className="text-[10px] font-mono font-bold opacity-80">
                              {formatVnd(prod.price)}
                            </span>
                          </button>
                        ))}
                      </div>

                      {/* Checkout & Print Button */}
                      <button
                        type="button"
                        onClick={handleCreatePosOrder}
                        data-cursor="pointer"
                        className="w-full py-2.5 px-4 bg-[var(--accent)] text-white hover:bg-[var(--bg-invert)] hover:text-[var(--text-invert)] font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                      >
                        <Printer className="w-4 h-4" />
                        <span>
                          {isVi ? 'TẠO ĐƠN & IN BILL NHIỆT ESC/POS' : 'RING ORDER & PRINT ESC/POS'}
                        </span>
                      </button>

                      {syncFlash && (
                        <div className="mt-3 px-3 py-2 bg-emerald-500/15 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono font-bold flex items-center gap-2">
                          <RefreshCw className="w-3.5 h-3.5 shrink-0" />
                          <span>{syncFlash}</span>
                        </div>
                      )}
                    </div>

                    {/* Thermal Receipt Output + SQLite Queue Monitor */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[var(--line)]">
                      {/* Simulated ESC/POS Thermal Receipt */}
                      {latestOrder && (
                        <div
                          key={latestOrder.id}
                          className="animate-receipt p-3 bg-[#FFFDF7] text-[#111318] border border-dashed border-[#111318]/40 font-mono text-[10px] leading-snug"
                        >
                          <div className="text-center font-bold border-b border-dashed border-[#111318]/40 pb-1.5 mb-1.5">
                            FINVIET ECO POS // ESC/POS
                          </div>
                          <div className="flex justify-between">
                            <span>ORDER:</span>
                            <span className="font-bold">{latestOrder.id}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="truncate pr-1">{latestOrder.item}</span>
                            <span className="font-bold">{formatVnd(latestOrder.price)}</span>
                          </div>
                          <div className="mt-1.5 pt-1.5 border-t border-dashed border-[#111318]/40 flex justify-between text-[9px] opacity-75">
                            <span>NĐ123 E-INV</span>
                            <span>{latestOrder.time}</span>
                          </div>
                        </div>
                      )}

                      {/* SQLite / Drift Queue Log */}
                      <div className="p-3 bg-[#0B0D12] text-[#C6CBD4] border border-white/10 font-mono text-[10px] flex flex-col justify-between">
                        <div className="flex items-center justify-between text-[#FFB238] border-b border-white/10 pb-1.5 mb-1.5">
                          <span className="inline-flex items-center gap-1">
                            <Database className="w-3 h-3" />
                            <span>SQLITE QUEUE</span>
                          </span>
                          <span className="font-bold">{pendingCount} PENDING</span>
                        </div>
                        <div className="space-y-1">
                          {orders.slice(0, 3).map((ord) => (
                            <div key={ord.id} className="flex items-center justify-between gap-1">
                              <span>{ord.id}</span>
                              <span
                                className={
                                  ord.status === 'SYNCED'
                                    ? 'text-emerald-400 font-bold'
                                    : 'text-[#FF4D00] font-bold'
                                }
                              >
                                {ord.status === 'SYNCED' ? 'SYNCED' : 'LOCAL'}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* HAHALOLO LAYOUT: Summary + Always-Visible 6-App Exposed Brutalist Matrix */
                <div>
                  <div className="p-5 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 border-b border-[var(--line)]">
                    <div className="lg:col-span-5">
                      <p className="font-display italic text-xl sm:text-2xl text-[var(--text-primary)] mb-2">
                        {item.project}
                      </p>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {item.summary}
                      </p>
                    </div>
                    <div className="lg:col-span-7 space-y-2.5">
                      <h4 className="text-[11px] font-mono uppercase tracking-widest text-[var(--accent)] font-bold">
                        // {t.keyContributionsLabel}
                      </h4>
                      {item.achievements.map((ach, achIdx) => (
                        <div
                          key={achIdx}
                          className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed flex items-start gap-2.5"
                        >
                          <Check className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 6-App Exposed Architectural Blueprint Matrix */}
                  {isHahalolo && item.subProjects && (
                    <div>
                      <div className="px-5 sm:px-8 lg:px-10 py-3 bg-[var(--bg-subtle)] border-b border-[var(--line)] flex items-center justify-between text-[11px] font-mono uppercase tracking-widest">
                        <span className="font-bold text-[var(--text-primary)]">
                          // {t.ecosystemHeader}
                        </span>
                        <span className="text-[var(--accent)] font-bold">06 / 06 APPS SHIPPED</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {item.subProjects.map((sub, sIdx) => (
                          <div
                            key={sub.name}
                            className={`brutalist-invert p-6 border-b border-[var(--line)] ${
                              sIdx % 3 !== 2 ? 'lg:border-r' : ''
                            } ${sIdx % 2 === 0 ? 'md:border-r lg:border-r-0' : ''} ${
                              sIdx % 3 !== 2 ? 'lg:border-r' : ''
                            } flex flex-col justify-between gap-4`}
                          >
                            <div>
                              <div className="flex items-center justify-between gap-2 mb-4">
                                <div className="flex items-center gap-3 min-w-0">
                                  {sub.iconUrl ? (
                                    <img
                                      src={sub.iconUrl}
                                      alt={sub.name}
                                      loading="lazy"
                                      className="w-10 h-10 object-cover border border-[var(--line-strong)] shrink-0 bg-white"
                                    />
                                  ) : (
                                    <div className="w-10 h-10 bg-[var(--accent)] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                                      AQ
                                    </div>
                                  )}
                                  <div className="min-w-0">
                                    <span className="text-[10px] font-mono uppercase invert-muted text-[var(--text-muted)] block truncate">
                                      {sub.category}
                                    </span>
                                    <h5 className="font-heading font-bold text-sm leading-snug">
                                      {sub.name}
                                    </h5>
                                  </div>
                                </div>
                                <span className="font-mono text-xs font-bold invert-muted text-[var(--text-muted)] shrink-0">
                                  0{sIdx + 1}
                                </span>
                              </div>

                              {sub.scaleBadge && (
                                <span className="inline-block mb-2.5 text-[10px] font-mono font-bold uppercase px-2 py-0.5 bg-[var(--accent-soft)] text-[var(--accent)]">
                                  {sub.scaleBadge}
                                </span>
                              )}

                              <p className="text-xs leading-relaxed invert-muted text-[var(--text-secondary)]">
                                {sub.description}
                              </p>
                            </div>

                            {sub.technologies && (
                              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--line)]">
                                {sub.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="text-[10px] font-mono uppercase px-1.5 py-0.5 border border-[var(--line)] invert-muted"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}

        {/* Education Exposed Architectural Row */}
        <div className="px-5 sm:px-8 lg:px-10 py-6 bg-[var(--bg-elevated)] flex flex-col md:flex-row md:items-center justify-between gap-4 reveal">
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-[var(--bg-invert)] text-[var(--text-invert)] shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] font-bold">
                // {t.eduBadge}
              </span>
              <h3 className="font-heading font-bold text-base sm:text-lg text-[var(--text-primary)] mt-0.5">
                {t.eduSchool}
              </h3>
              <p className="text-xs font-mono text-[var(--text-muted)]">
                {t.eduDegree}
              </p>
            </div>
          </div>
          <p className="text-xs text-[var(--text-secondary)] md:max-w-md leading-relaxed">
            {t.eduDetails}
          </p>
        </div>
      </div>
    </section>
  );
};
