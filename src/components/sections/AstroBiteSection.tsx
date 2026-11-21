import React, { useState } from 'react';
import {
  ArrowUpRight,
  Camera,
  Mic,
  Sparkles,
  ShieldCheck,
  Check,
  Play,
  Smartphone,
  Terminal,
  Minus,
  Plus,
  Volume2,
} from 'lucide-react';
import {
  getAstrobiteOverview,
  getAstrobitePillars,
} from '../../data/astrobiteData';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';
import { GridCrosshairs, TiltStage3D } from '../common/KineticPrimitives';

interface DishOption {
  id: string;
  labelVi: string;
  labelEn: string;
  kcalDelta: number;
  sodiumDelta: number;
  carbsDelta: number;
  proteinDelta: number;
  fatDelta: number;
  isBroth?: boolean;
}

interface DishPreset {
  id: 'pho' | 'comtam';
  nameVi: string;
  nameEn: string;
  baseKcal: number;
  baseSodium: number;
  baseCarbs: number;
  baseProtein: number;
  baseFat: number;
  options: DishOption[];
}

const DISH_PRESETS: DishPreset[] = [
  {
    id: 'pho',
    nameVi: 'Phở Bò Tái Nạm + Quẩy',
    nameEn: 'Beef Pho + Fried Dough',
    baseKcal: 410,
    baseSodium: 640,
    baseCarbs: 54,
    baseProtein: 32,
    baseFat: 7,
    options: [
      {
        id: 'broth',
        labelVi: 'Húp hết nước dùng béo',
        labelEn: 'Full fatty broth',
        kcalDelta: 270,
        sodiumDelta: 1210,
        carbsDelta: 4,
        proteinDelta: 6,
        fatDelta: 24,
        isBroth: true,
      },
      {
        id: 'quay',
        labelVi: '2 cái quẩy giòn',
        labelEn: '2 fried dough sticks',
        kcalDelta: 140,
        sodiumDelta: 180,
        carbsDelta: 18,
        proteinDelta: 3,
        fatDelta: 6,
      },
      {
        id: 'nammo',
        labelVi: 'Thêm thịt nạm gầu béo',
        labelEn: 'Extra fatty brisket',
        kcalDelta: 95,
        sodiumDelta: 85,
        carbsDelta: 0,
        proteinDelta: 6,
        fatDelta: 8,
      },
    ],
  },
  {
    id: 'comtam',
    nameVi: 'Cơm Tấm Sườn Bì Chả',
    nameEn: 'Broken Rice Combo',
    baseKcal: 485,
    baseSodium: 520,
    baseCarbs: 68,
    baseProtein: 31,
    baseFat: 10,
    options: [
      {
        id: 'cha',
        labelVi: 'Miếng chả trứng hấp',
        labelEn: 'Steamed egg meatloaf',
        kcalDelta: 150,
        sodiumDelta: 240,
        carbsDelta: 6,
        proteinDelta: 10,
        fatDelta: 10,
      },
      {
        id: 'mohanh',
        labelVi: 'Rưới mỡ hành + tóp mỡ',
        labelEn: 'Scallion oil & pork crackling',
        kcalDelta: 115,
        sodiumDelta: 90,
        carbsDelta: 2,
        proteinDelta: 2,
        fatDelta: 11,
      },
      {
        id: 'nuocmam',
        labelVi: 'Chén nước mắm đường',
        labelEn: 'Sweet fish sauce dip',
        kcalDelta: 70,
        sodiumDelta: 780,
        carbsDelta: 16,
        proteinDelta: 1,
        fatDelta: 0,
      },
    ],
  },
];

interface VoiceSample {
  id: string;
  transcriptVi: string;
  transcriptEn: string;
  mealSlotVi: string;
  mealSlotEn: string;
  dishNameVi: string;
  dishNameEn: string;
  defaultGrams: number;
  kcalPer100g: number;
  carbsPer100g: number;
  proteinPer100g: number;
  fatPer100g: number;
  latencyMs: number;
}

const VOICE_SAMPLES: VoiceSample[] = [
  {
    id: 'bunbo',
    transcriptVi: '"Sáng nay ăn 1 tô bún bò giò heo với 2 cái quẩy"',
    transcriptEn: '"Had 1 bowl of Hue beef noodle soup and 2 dough sticks"',
    mealSlotVi: 'Bữa Sáng · 07:45',
    mealSlotEn: 'Breakfast · 07:45',
    dishNameVi: 'Bún Bò Giò Heo + Quẩy',
    dishNameEn: 'Hue Beef Noodle + Dough',
    defaultGrams: 460,
    kcalPer100g: 138,
    carbsPer100g: 16.5,
    proteinPer100g: 8.2,
    fatPer100g: 4.3,
    latencyMs: 1120,
  },
  {
    id: 'cfsua',
    transcriptVi: '"Uống 1 ly cà phê sữa đá ít đường lúc 2 giờ chiều"',
    transcriptEn: '"1 iced Vietnamese milk coffee less sugar at 2 PM"',
    mealSlotVi: 'Bữa Xế · 14:00',
    mealSlotEn: 'Afternoon · 14:00',
    dishNameVi: 'Cà Phê Sữa Đá (Ít đường)',
    dishNameEn: 'Iced Milk Coffee (Light)',
    defaultGrams: 240,
    kcalPer100g: 56,
    carbsPer100g: 9.2,
    proteinPer100g: 1.4,
    fatPer100g: 1.6,
    latencyMs: 940,
  },
];

export const AstroBiteSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].astrobite;
  const overview = getAstrobiteOverview(language);
  const pillars = getAstrobitePillars(language);
  const isVi = language === 'vi';

  const [selectedPillarIndex, setSelectedPillarIndex] = useState(0);
  const [stageMode, setStageMode] = useState<'screen' | 'video'>('screen');

  // Lab A state: Asian Cuisine Broth & Topping Switch
  const [dishId, setDishId] = useState<'pho' | 'comtam'>('pho');
  const [includedOptions, setIncludedOptions] = useState<Record<string, boolean>>({
    broth: true,
    quay: true,
    nammo: false,
    cha: true,
    mohanh: true,
    nuocmam: true,
  });

  // Lab B state: AstroVoice + GenUI A2UI Card
  const [voiceId, setVoiceId] = useState<string>('bunbo');
  const [portionGrams, setPortionGrams] = useState<number>(460);
  const [savedLogMs, setSavedLogMs] = useState<number | null>(null);

  const activeDish = DISH_PRESETS.find((d) => d.id === dishId) || DISH_PRESETS[0];
  const activeVoice = VOICE_SAMPLES.find((v) => v.id === voiceId) || VOICE_SAMPLES[0];

  const dishStats = activeDish.options.reduce(
    (acc, opt) => {
      if (includedOptions[opt.id]) {
        acc.kcal += opt.kcalDelta;
        acc.sodium += opt.sodiumDelta;
        acc.carbs += opt.carbsDelta;
        acc.protein += opt.proteinDelta;
        acc.fat += opt.fatDelta;
      }
      return acc;
    },
    {
      kcal: activeDish.baseKcal,
      sodium: activeDish.baseSodium,
      carbs: activeDish.baseCarbs,
      protein: activeDish.baseProtein,
      fat: activeDish.baseFat,
    }
  );

  const maxDishSodium =
    activeDish.baseSodium + activeDish.options.reduce((sum, opt) => sum + opt.sodiumDelta, 0);
  const sodiumSavedPct = Math.round(((maxDishSodium - dishStats.sodium) / maxDishSodium) * 100);

  const toggleDishOption = (optId: string) => {
    setIncludedOptions((prev) => ({ ...prev, [optId]: !prev[optId] }));
    setSelectedPillarIndex(0);
    setStageMode('screen');
  };

  const handleSelectVoice = (sample: VoiceSample) => {
    setVoiceId(sample.id);
    setPortionGrams(sample.defaultGrams);
    setSavedLogMs(null);
    setSelectedPillarIndex(2);
    setStageMode('screen');
  };

  const handleAdjustGrams = (delta: number) => {
    setPortionGrams((prev) => Math.max(80, Math.min(900, prev + delta)));
    setSavedLogMs(null);
    setSelectedPillarIndex(2);
    setStageMode('screen');
  };

  const handleOneTapLog = () => {
    setSavedLogMs(44);
    setSelectedPillarIndex(2);
    setStageMode('screen');
  };

  const genuiKcal = Math.round((activeVoice.kcalPer100g * portionGrams) / 100);
  const genuiCarbs = Math.round((activeVoice.carbsPer100g * portionGrams) / 100);
  const genuiProtein = Math.round((activeVoice.proteinPer100g * portionGrams) / 100);
  const genuiFat = Math.round((activeVoice.fatPer100g * portionGrams) / 100);

  const activePillar = pillars[selectedPillarIndex] || pillars[0];
  const pillarGlows = ['#1CB0F6', '#FF9600', '#FFB238', '#10B981'];
  const pillarIcons = [
    <Camera key="0" className="w-4 h-4" />,
    <Mic key="1" className="w-4 h-4" />,
    <Sparkles key="2" className="w-4 h-4" />,
    <ShieldCheck key="3" className="w-4 h-4" />,
  ];

  return (
    <section id="projects" className="border-b border-[var(--line)] bg-[var(--bg)] relative">
      <span id="astrobite" className="absolute -top-16" />

      <div className="swiss-frame relative">
        <GridCrosshairs corners={['bl', 'br']} />

        {/* 1. Monumental Section Header Strip */}
        <div className="px-5 sm:px-8 lg:px-10 py-10 sm:py-14 border-b border-[var(--line)] reveal">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest mb-4">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 bg-[var(--accent)] text-white font-bold">01</span>
              <span className="text-[var(--accent)] font-bold">{t.badgeFlagship}</span>
            </div>
            <a
              href="#gallery"
              data-cursor="pointer"
              className="inline-flex items-center gap-1.5 text-[var(--text-primary)] hover:text-[var(--accent)] font-bold transition-colors"
            >
              <span>{t.viewScreensLink}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-7">
              <h2 className="font-heading font-bold uppercase text-[clamp(2.4rem,6vw,5.4rem)] leading-[0.9] tracking-[-0.04em] text-[var(--text-primary)]">
                ASTROBITE{' '}
                <span className="font-display italic font-normal lowercase text-[var(--accent)] text-[clamp(1.6rem,3.4vw,3rem)]">
                  v3.0.0
                </span>
              </h2>
              <p className="font-display italic text-xl sm:text-2xl text-[var(--text-primary)] mt-3">
                {overview.tagline}
              </p>
            </div>
            <p className="lg:col-span-5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              {overview.description}
            </p>
          </div>
        </div>

        {/* 2. 4-Column Architecture Telemetry Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-[var(--line)] bg-[var(--bg-elevated)]">
          {overview.metrics.map((metric, idx) => (
            <div
              key={metric.label}
              className={`px-5 py-4 border-b lg:border-b-0 border-[var(--line)] ${
                idx < 3 ? 'lg:border-r' : ''
              } ${idx % 2 === 0 ? 'border-r' : ''}`}
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] block">
                // {metric.label}
              </span>
              <span className="text-xs sm:text-sm font-mono font-bold text-[var(--text-primary)] mt-1 block">
                {metric.value}
              </span>
            </div>
          ))}
        </div>

        {/* 3. Main Split Grid: Left (Interactive Live Labs + 4 Modules) | Right (Sticky 3D Phone) */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* LEFT 7 COLUMNS */}
          <div className="lg:col-span-7 lg:border-r border-[var(--line)]">
            {/* LIVE LAB A: ASIAN CUISINE BROTH & TOPPING ENGINE */}
            <div className="p-5 sm:p-8 border-b border-[var(--line)] bg-[var(--bg-elevated)] relative reveal">
              <GridCrosshairs corners={['bl', 'br']} />

              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] font-bold block">
                    LAB.A // {isVi ? 'BÀN THỬ NGHIỆM SỐNG · TÁCH NƯỚC DÙNG & TOPPING' : 'INTERACTIVE LAB · BROTH & TOPPING ENGINE'}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-[var(--text-primary)] mt-1">
                    {isVi ? 'Bấm thử gạt bỏ nước béo hoặc topping món Việt' : 'Toggle broth or toppings live — watch macros recalculate'}
                  </h3>
                </div>

                {/* Dish Switcher */}
                <div className="inline-flex border border-[var(--line-strong)]">
                  {DISH_PRESETS.map((dish) => (
                    <button
                      key={dish.id}
                      type="button"
                      onClick={() => {
                        setDishId(dish.id);
                        setSelectedPillarIndex(0);
                        setStageMode('screen');
                      }}
                      data-cursor="pointer"
                      className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                        dishId === dish.id
                          ? 'bg-[var(--bg-invert)] text-[var(--text-invert)] font-bold'
                          : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {dish.id === 'pho' ? (isVi ? 'Phở Bò' : 'Pho') : (isVi ? 'Cơm Tấm' : 'Broken Rice')}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 border border-[var(--line-strong)] bg-[var(--bg)]">
                {/* Interactive Switches (7 cols) */}
                <div className="md:col-span-7 p-4 sm:p-5 border-b md:border-b-0 md:border-r border-[var(--line)] space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)] pb-2 border-b border-[var(--line)]">
                    <span className="font-bold text-[var(--text-primary)]">
                      {isVi ? activeDish.nameVi : activeDish.nameEn}
                    </span>
                    <span>{isVi ? 'Bấm bật / tắt' : 'Click to toggle'}</span>
                  </div>

                  {activeDish.options.map((opt) => {
                    const checked = !!includedOptions[opt.id];
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => toggleDishOption(opt.id)}
                        data-cursor="pointer"
                        className={`w-full flex items-center justify-between gap-3 px-3.5 py-2.5 border text-left transition-all cursor-pointer ${
                          checked
                            ? 'border-[var(--line-strong)] bg-[var(--bg-elevated)] text-[var(--text-primary)]'
                            : 'border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--text-primary)]'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span
                            className={`w-4 h-4 flex items-center justify-center border text-[10px] font-mono font-bold shrink-0 ${
                              checked
                                ? 'border-[var(--line-strong)] bg-[var(--bg-invert)] text-[var(--text-invert)]'
                                : 'border-[var(--accent)] text-[var(--accent)]'
                            }`}
                          >
                            {checked ? '✓' : '✕'}
                          </span>
                          <div className="min-w-0">
                            <span className={`text-xs font-medium block truncate ${!checked ? 'line-through opacity-75' : ''}`}>
                              {isVi ? opt.labelVi : opt.labelEn}
                            </span>
                            {opt.isBroth && (
                              <span className="text-[10px] font-mono text-[var(--accent)] font-semibold">
                                {checked
                                  ? (isVi ? 'Đang tính: Ăn cả nước béo' : 'Mode: With fatty broth')
                                  : (isVi ? 'Đã gạt: Chỉ ăn cái (-65% Natri)' : 'Mode: Solids only (-65% Sodium)')}
                              </span>
                            )}
                          </div>
                        </div>

                        <span className="text-[11px] font-mono shrink-0 text-[var(--text-muted)]">
                          {checked ? `+${opt.kcalDelta}` : `-${opt.kcalDelta}`} kcal
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Live Telemetry Readout (5 cols) */}
                <div className="md:col-span-5 p-4 sm:p-5 flex flex-col justify-between bg-[var(--bg-subtle)]">
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)]">
                        TOTAL ENERGY
                      </span>
                      {sodiumSavedPct > 0 && (
                        <span className="px-1.5 py-0.5 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-bold">
                          -{sodiumSavedPct}% NATRI
                        </span>
                      )}
                    </div>
                    <div className="font-heading font-bold text-4xl tracking-tight text-[var(--text-primary)] mt-1 tabular-nums">
                      {dishStats.kcal}{' '}
                      <span className="text-sm font-mono font-normal text-[var(--text-muted)]">kcal</span>
                    </div>
                    <div className="text-[11px] font-mono text-[var(--text-secondary)] mt-1 tabular-nums">
                      Natri (Muối): <strong className="text-[var(--accent)]">{dishStats.sodium} mg</strong>
                    </div>
                  </div>

                  {/* Color-coded Macro Bars */}
                  <div className="space-y-2.5 mt-5 pt-4 border-t border-[var(--line)]">
                    {[
                      { label: 'CARBS', value: dishStats.carbs, max: 110, color: '#1CB0F6' },
                      { label: 'PROTEIN', value: dishStats.protein, max: 60, color: '#FF9600' },
                      { label: 'FAT', value: dishStats.fat, max: 50, color: '#FF5C8D' },
                    ].map((macro) => (
                      <div key={macro.label}>
                        <div className="flex justify-between text-[10px] font-mono mb-1">
                          <span style={{ color: macro.color }} className="font-bold">
                            {macro.label}
                          </span>
                          <span className="text-[var(--text-primary)] tabular-nums">{macro.value}g</span>
                        </div>
                        <div className="h-1.5 w-full bg-[var(--bg)] overflow-hidden">
                          <div
                            className="h-full transition-all duration-300"
                            style={{
                              width: `${Math.min(100, Math.round((macro.value / macro.max) * 100))}%`,
                              backgroundColor: macro.color,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* LIVE LAB B: ASTROVOICE (~1.1s) + GENUI A2UI WIDGET */}
            <div className="p-5 sm:p-8 border-b border-[var(--line)] bg-[var(--bg)] relative reveal">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] font-bold block">
                    LAB.B // {isVi ? 'ASTROVOICE TIẾNG VIỆT + THẺ TƯƠNG TÁC GENUI A2UI' : 'ASTROVOICE NLU + GENUI A2UI WIDGET'}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-[var(--text-primary)] mt-1">
                    {isVi ? 'Chọn câu nói mẫu, chỉnh +/-20g và bấm Lưu 1 chạm' : 'Pick a voice transcript, scale +/-20g, and 1-tap log'}
                  </h3>
                </div>
              </div>

              {/* Voice Transcript Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
                {VOICE_SAMPLES.map((sample) => {
                  const active = voiceId === sample.id;
                  return (
                    <button
                      key={sample.id}
                      type="button"
                      onClick={() => handleSelectVoice(sample)}
                      data-cursor="pointer"
                      className={`p-3 border text-left transition-all cursor-pointer flex items-start gap-2.5 ${
                        active
                          ? 'border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--text-primary)]'
                          : 'border-[var(--line)] bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:border-[var(--line-strong)]'
                      }`}
                    >
                      <Volume2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                      <div className="min-w-0">
                        <span className="text-xs italic block leading-snug">
                          {isVi ? sample.transcriptVi : sample.transcriptEn}
                        </span>
                        <span className="text-[10px] font-mono text-[var(--text-muted)] mt-1 block">
                          NLU PARSE: {sample.latencyMs}ms
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Split: JSON Payload vs Live Interactive GenUI Widget */}
              <div className="grid grid-cols-1 md:grid-cols-12 border border-[var(--line-strong)]">
                {/* Raw A2UI JSON Payload */}
                <div className="md:col-span-5 p-4 bg-[#0B0D12] text-[#C6CBD4] font-mono text-[11px] leading-relaxed border-b md:border-b-0 md:border-r border-white/10 overflow-x-auto">
                  <div className="text-[10px] text-[#FFB238] uppercase tracking-wider mb-2">
                    // GEMINI A2UI PAYLOAD
                  </div>
                  <pre className="whitespace-pre-wrap break-words">{`{
  "widget": "MealQuickLogCard",
  "meal": "${isVi ? activeVoice.mealSlotVi : activeVoice.mealSlotEn}",
  "grams": ${portionGrams},
  "kcal": ${genuiKcal},
  "latency_ms": ${activeVoice.latencyMs}
}`}</pre>
                </div>

                {/* Live Rendered GenUI Native-Style Card */}
                <div className="md:col-span-7 p-4 sm:p-5 bg-[var(--bg-elevated)] flex flex-col justify-between gap-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--accent)] font-bold">
                        {isVi ? activeVoice.mealSlotVi : activeVoice.mealSlotEn}
                      </span>
                      <h4 className="font-heading font-bold text-base text-[var(--text-primary)] mt-0.5">
                        {isVi ? activeVoice.dishNameVi : activeVoice.dishNameEn}
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="font-heading font-bold text-2xl text-[var(--text-primary)] tabular-nums">
                        {genuiKcal}
                      </span>
                      <span className="text-[10px] font-mono text-[var(--text-muted)] block">kcal</span>
                    </div>
                  </div>

                  {/* Interactive Portion Stepper + Macros */}
                  <div className="flex flex-wrap items-center justify-between gap-3 py-2.5 border-y border-[var(--line)]">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleAdjustGrams(-20)}
                        data-cursor="pointer"
                        className="w-8 h-8 flex items-center justify-center border border-[var(--line-strong)] bg-[var(--bg)] hover:bg-[var(--bg-invert)] hover:text-[var(--text-invert)] transition-colors cursor-pointer"
                        aria-label="Decrease 20g"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-mono font-bold text-xs px-2 tabular-nums text-[var(--text-primary)]">
                        {portionGrams}g
                      </span>
                      <button
                        type="button"
                        onClick={() => handleAdjustGrams(20)}
                        data-cursor="pointer"
                        className="w-8 h-8 flex items-center justify-center border border-[var(--line-strong)] bg-[var(--bg)] hover:bg-[var(--bg-invert)] hover:text-[var(--text-invert)] transition-colors cursor-pointer"
                        aria-label="Increase 20g"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-3 text-[11px] font-mono tabular-nums">
                      <span className="text-[#1CB0F6] font-bold">C:{genuiCarbs}g</span>
                      <span className="text-[#FF9600] font-bold">P:{genuiProtein}g</span>
                      <span className="text-[#FF5C8D] font-bold">F:{genuiFat}g</span>
                    </div>
                  </div>

                  {/* 1-Tap Log Button */}
                  <div className="flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={handleOneTapLog}
                      data-cursor="pointer"
                      className="flex-1 py-2.5 px-4 bg-[var(--accent)] text-white hover:bg-[var(--bg-invert)] hover:text-[var(--text-invert)] font-mono font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      {savedLogMs
                        ? (isVi ? `✓ ĐÃ LƯU SQLITE + FIRESTORE (${savedLogMs}ms)` : `✓ LOGGED SQLITE + FIRESTORE (${savedLogMs}ms)`)
                        : (isVi ? '1-CHẠM LƯU NHẬT KÝ (~45ms)' : '1-TAP LOG MEAL (~45ms)')}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 ARCHITECTURE MODULES (EXPOSED HAIRLINE ROWS) */}
            <div>
              <div className="px-5 sm:px-8 py-3.5 border-b border-[var(--line)] bg-[var(--bg-subtle)] flex items-center justify-between text-[11px] font-mono uppercase tracking-widest">
                <span className="text-[var(--text-primary)] font-bold">
                  // {t.pillarsHeader}
                </span>
                <span className="text-[var(--text-muted)]">
                  {isVi ? 'Bấm từng dòng đổi màn hình →' : 'Click row to switch phone →'}
                </span>
              </div>

              {pillars.map((pillar, idx) => {
                const isSelected = selectedPillarIndex === idx && stageMode === 'screen';
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => {
                      setSelectedPillarIndex(idx);
                      setStageMode('screen');
                    }}
                    data-cursor="pointer"
                    className={`w-full text-left px-5 sm:px-8 py-6 border-b last:border-b-0 border-[var(--line)] transition-all cursor-pointer block ${
                      isSelected
                        ? 'bg-[var(--bg-elevated)] border-l-4 border-l-[var(--accent)]'
                        : 'hover:bg-[var(--bg-subtle)]'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-3">
                        <span
                          className={`p-2 border ${
                            isSelected
                              ? 'bg-[var(--accent)] text-white border-[var(--accent)]'
                              : 'bg-[var(--bg-subtle)] text-[var(--accent)] border-[var(--line)]'
                          }`}
                        >
                          {pillarIcons[idx]}
                        </span>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] block">
                            {pillar.number} // {pillar.tag}
                          </span>
                          <h4 className="font-heading font-bold text-base sm:text-lg text-[var(--text-primary)]">
                            {pillar.title}
                          </h4>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase bg-[var(--accent-soft)] text-[var(--accent)]">
                        {pillar.metricBadge}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                      {pillar.description}
                    </p>

                    <ul className="space-y-1.5">
                      {pillar.highlights.map((hl, hIdx) => (
                        <li
                          key={hIdx}
                          className="text-xs text-[var(--text-secondary)] flex items-start gap-2"
                        >
                          <Check className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT 5 COLUMNS: STICKY 3D DEVICE & TELEMETRY STAGE */}
          <div className="lg:col-span-5 lg:sticky lg:top-14 self-start bg-[var(--bg-elevated)] border-t lg:border-t-0 border-[var(--line)]">
            {/* Switcher Strip */}
            <div className="grid grid-cols-2 border-b border-[var(--line)]">
              <button
                type="button"
                onClick={() => setStageMode('screen')}
                data-cursor="pointer"
                className={`py-3.5 px-4 flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider border-r border-[var(--line)] transition-colors cursor-pointer ${
                  stageMode === 'screen'
                    ? 'bg-[var(--bg-invert)] text-[var(--text-invert)] font-bold'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>{t.interactiveModeScreens}</span>
              </button>
              <button
                type="button"
                onClick={() => setStageMode('video')}
                data-cursor="pointer"
                className={`py-3.5 px-4 flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                  stageMode === 'video'
                    ? 'bg-[var(--accent)] text-white font-bold'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                <Play className="w-3.5 h-3.5" />
                <span>{t.interactiveModeVideo}</span>
              </button>
            </div>

            {/* 3D Tilt Phone Viewport */}
            <div className="px-6 py-10 flex items-center justify-center overflow-hidden">
              <TiltStage3D glowColor={pillarGlows[selectedPillarIndex] || '#FF4D00'} maxTilt={9}>
                <div className="w-[258px] sm:w-[276px] rounded-[2.6rem] p-3 bg-[#0D1017] border border-white/20 shadow-[0_30px_65px_-16px_rgba(0,0,0,0.65)]">
                  <div className="flex items-center justify-between px-5 py-1 text-[10px] font-mono text-white/60 mb-1 select-none">
                    <span>9:41</span>
                    <div className="w-16 h-3 rounded-full bg-black border border-white/10" />
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>

                  <div
                    key={stageMode === 'video' ? 'video' : activePillar.id}
                    className="animate-stage-enter relative rounded-[2rem] overflow-hidden bg-black aspect-[9/17.8]"
                  >
                    {stageMode === 'video' ? (
                      <video
                        controls
                        playsInline
                        preload="metadata"
                        poster="/screenshots/clay/cockpit_dashboard.png"
                        className="w-full h-full object-cover"
                      >
                        <source src="/astrobite-demo.mp4" type="video/mp4" />
                        {isVi
                          ? 'Trình duyệt của bạn không hỗ trợ thẻ video.'
                          : 'Your browser does not support the video tag.'}
                      </video>
                    ) : (
                      <img
                        src={activePillar.screenImage}
                        alt={activePillar.title}
                        className="w-full h-full object-cover object-top"
                      />
                    )}
                  </div>

                  <div className="pt-2.5 pb-1 flex justify-center">
                    <div className="w-24 h-1 rounded-full bg-white/25" />
                  </div>
                </div>
              </TiltStage3D>
            </div>

            {/* Technical Note Block */}
            <div className="p-5 sm:p-6 border-t border-[var(--line)] bg-[var(--bg-subtle)] space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider">
                <span className="flex items-center gap-2 text-[var(--accent)] font-bold">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>{stageMode === 'video' ? t.demoVideoTitle : t.codeInsightLabel}</span>
                </span>
                <span className="text-[var(--text-muted)]">
                  {stageMode === 'video' ? 'MP4' : `MOD ${activePillar.number}`}
                </span>
              </div>
              <p className="text-xs font-mono text-[var(--text-secondary)] leading-relaxed">
                {stageMode === 'video' ? t.demoVideoSubtitle : activePillar.codeInsight}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {activePillar.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono uppercase px-2 py-0.5 bg-[var(--bg)] border border-[var(--line)] text-[var(--text-primary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
