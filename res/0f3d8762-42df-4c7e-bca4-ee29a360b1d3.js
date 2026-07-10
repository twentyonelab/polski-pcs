/* @ds-bundle: {"format":4,"namespace":"PolskiPCSDesignSystem_9b91fe","components":[{"name":"ArrowLink","sourcePath":"components/core/ArrowLink.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"ChecklistItem","sourcePath":"components/core/ChecklistItem.jsx"},{"name":"CtaBanner","sourcePath":"components/core/CtaBanner.jsx"},{"name":"FeatureItem","sourcePath":"components/core/FeatureItem.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"LongArrow","sourcePath":"components/core/LongArrow.jsx"},{"name":"NavBar","sourcePath":"components/core/NavBar.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"ServiceTile","sourcePath":"components/core/ServiceTile.jsx"},{"name":"StatBar","sourcePath":"components/core/StatBar.jsx"},{"name":"StatusCheckCard","sourcePath":"components/core/StatusCheckCard.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"}],"sourceHashes":{"components/core/ArrowLink.jsx":"2e1011290ce6","components/core/Button.jsx":"d29740b27570","components/core/ChecklistItem.jsx":"2841eec9bbc4","components/core/CtaBanner.jsx":"572901e234ad","components/core/FeatureItem.jsx":"0832cf5d299a","components/core/Input.jsx":"ed344383b92e","components/core/LongArrow.jsx":"4fa78a4dc1ca","components/core/NavBar.jsx":"9322c27908b4","components/core/SectionHeading.jsx":"b06016db2c80","components/core/ServiceTile.jsx":"1b3cdabd2429","components/core/StatBar.jsx":"52efddabc71c","components/core/StatusCheckCard.jsx":"4d1e79cf0f27","components/core/Wordmark.jsx":"8537c2a97ca8","ui_kits/website/Sections.jsx":"eb755d0210e8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PolskiPCSDesignSystem_9b91fe = window.PolskiPCSDesignSystem_9b91fe || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Polski PCS button. Uppercase letterspaced label.
 * variant: 'primary' (solid teal) | 'secondary' (white, teal border)
 */
function Button({
  variant = 'primary',
  children,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const base = {
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-label)',
    fontWeight: 'var(--weight-semibold)',
    letterSpacing: 'var(--tracking-label)',
    textTransform: 'uppercase',
    borderRadius: 'var(--radius-md)',
    padding: '14px 28px',
    cursor: 'pointer',
    transition: 'background .18s ease, color .18s ease, border-color .18s ease',
    lineHeight: 1,
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: {
      background: hover ? 'var(--accent-hover)' : 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: '1px solid transparent'
    },
    secondary: {
      background: 'var(--white)',
      color: hover ? 'var(--teal-700)' : 'var(--accent)',
      border: `1px solid ${hover ? 'var(--teal-500)' : 'var(--teal-300)'}`
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: onClick,
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/ChecklistItem.jsx
try { (() => {
/** Check-circle bullet row from the "Zintegrowany ekosystem" list. */
function ChecklistItem({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    "aria-hidden": "true",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "9",
    stroke: "var(--teal-500)",
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 10.2l2.3 2.3 4.7-4.8",
    stroke: "var(--teal-500)",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--navy-600)',
      fontSize: 'var(--text-body)',
      lineHeight: 1.5
    }
  }, children));
}
Object.assign(__ds_scope, { ChecklistItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ChecklistItem.jsx", error: String((e && e.message) || e) }); }

// components/core/CtaBanner.jsx
try { (() => {
/**
 * Full-width bordered CTA banner: teal icon, navy title, gray text, secondary button.
 */
function CtaBanner({
  icon,
  title,
  text,
  buttonLabel,
  onAction
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '40px',
      background: 'var(--white)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '36px 44px'
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)',
      display: 'inline-flex',
      flexShrink: 0
    }
  }, icon) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      color: 'var(--text-heading)',
      fontSize: '22px',
      fontWeight: 'var(--weight-medium)',
      lineHeight: 1.4,
      flex: '0 1 auto',
      maxWidth: '380px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      marginLeft: 'auto',
      color: 'var(--text-muted)',
      fontSize: 'var(--text-small)',
      lineHeight: 'var(--leading-body)',
      maxWidth: '300px'
    }
  }, text), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    onClick: onAction,
    style: {
      flexShrink: 0
    }
  }, buttonLabel));
}
Object.assign(__ds_scope, { CtaBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CtaBanner.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input, optional trailing icon node. */
function Input({
  placeholder,
  icon,
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      background: 'var(--white)',
      border: '1px solid var(--border-input)',
      borderRadius: 'var(--radius-md)',
      padding: '0 16px',
      height: '52px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body)',
      color: 'var(--navy-800)',
      minWidth: 0
    }
  }, rest)), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gray-400)',
      display: 'inline-flex',
      flexShrink: 0
    }
  }, icon) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/LongArrow.jsx
try { (() => {
/** Long thin arrow used across links and buttons. */
function LongArrow({
  size = 22
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size * 0.45,
    viewBox: "0 0 24 10",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 5h22M18.5 1.5 22 5l-3.5 3.5",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
Object.assign(__ds_scope, { LongArrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LongArrow.jsx", error: String((e && e.message) || e) }); }

// components/core/ArrowLink.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Micro-label link with long thin arrow. tone: 'navy' | 'teal'.
 * Pass label="" for arrow-only affordance.
 */
function ArrowLink({
  label,
  tone = 'navy',
  href = '#',
  onClick
}) {
  const [hover, setHover] = useState(false);
  const color = tone === 'teal' ? 'var(--accent)' : 'var(--navy-800)';
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '14px',
      color,
      textDecoration: 'none',
      fontSize: 'var(--text-label)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      fontFamily: 'var(--font-sans)'
    }
  }, label ? /*#__PURE__*/React.createElement("span", null, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      transform: hover ? 'translateX(4px)' : 'none',
      transition: 'transform .18s ease'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.LongArrow, null)));
}
Object.assign(__ds_scope, { ArrowLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ArrowLink.jsx", error: String((e && e.message) || e) }); }

// components/core/FeatureItem.jsx
try { (() => {
/**
 * Benefit column: teal line icon, navy title, gray copy, arrow-only link.
 * Pass the icon as a node (e.g. a Lucide <i data-lucide>).
 */
function FeatureItem({
  icon,
  title,
  description,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '18px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)',
      display: 'inline-flex'
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      color: 'var(--text-heading)',
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--weight-medium)',
      lineHeight: 1.35
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-body)',
      fontSize: 'var(--text-small)',
      lineHeight: 'var(--leading-body)'
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '6px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ArrowLink, {
    onClick: onClick
  })));
}
Object.assign(__ds_scope, { FeatureItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FeatureItem.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
/** Section header: teal uppercase eyebrow + navy title + optional description. */
function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  maxWidth
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      maxWidth,
      margin: align === 'center' ? '0 auto' : undefined
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--accent)',
      fontSize: 'var(--text-label)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      marginBottom: '14px'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: 'var(--text-heading)',
      fontSize: 'var(--text-h2)',
      fontWeight: 'var(--weight-medium)',
      lineHeight: 'var(--leading-tight)',
      margin: 0
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-body)',
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--leading-body)',
      marginTop: '18px',
      marginBottom: 0
    }
  }, description) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/ServiceTile.jsx
try { (() => {
/**
 * Module tile: teal icon, image thumb on light-gray card, title, copy, arrow.
 * image: URL of a desaturated render (project assets/).
 */
function ServiceTile({
  icon,
  image,
  imageAlt = '',
  title,
  description,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)',
      display: 'inline-flex',
      marginBottom: '14px'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '16 / 10',
      borderRadius: 'var(--radius-md)',
      background: 'var(--bg-tile)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : null), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '20px 0 0',
      color: 'var(--text-heading)',
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--weight-medium)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      color: 'var(--text-body)',
      fontSize: 'var(--text-small)',
      lineHeight: 'var(--leading-body)'
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '16px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ArrowLink, {
    onClick: onClick
  })));
}
Object.assign(__ds_scope, { ServiceTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ServiceTile.jsx", error: String((e && e.message) || e) }); }

// components/core/StatBar.jsx
try { (() => {
/**
 * Bordered stat bar: teal number, uppercase navy label, gray qualifier.
 * items: [{ value, label, sub }]
 */
function StatBar({
  items = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${items.length || 1}, 1fr)`,
      background: 'var(--white)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '36px 12px'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      textAlign: 'center',
      padding: '0 16px',
      borderLeft: i > 0 ? '1px solid var(--divider)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--accent)',
      fontSize: 'var(--text-stat)',
      fontWeight: 'var(--weight-medium)',
      lineHeight: 1.1
    }
  }, it.value), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-heading)',
      fontSize: 'var(--text-label)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      marginTop: '10px'
    }
  }, it.label), it.sub ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-small)',
      marginTop: '6px'
    }
  }, it.sub) : null)));
}
Object.assign(__ds_scope, { StatBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatBar.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusCheckCard.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Floating hero widget: "Sprawdź status kontenera" — title, input with scan icon,
 * "Jak to działa?" link + primary button.
 */
function StatusCheckCard({
  onCheck,
  onHow
}) {
  const [val, setVal] = useState('');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-float)',
      padding: '32px',
      width: '380px',
      maxWidth: '100%'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 20px',
      color: 'var(--text-heading)',
      fontSize: '18px',
      fontWeight: 'var(--weight-semibold)'
    }
  }, "Sprawd\u017A status kontenera"), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    placeholder: "Wpisz numer kontenera (np. MRKU1234567)",
    value: val,
    onChange: e => setVal(e.target.value),
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M8 9v6M12 9v6M16 9v6"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '24px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onHow && onHow();
    },
    style: {
      color: 'var(--navy-800)',
      fontSize: 'var(--text-small)',
      textDecoration: 'none'
    }
  }, "Jak to dzia\u0142a?"), /*#__PURE__*/React.createElement(__ds_scope.ArrowLink, {
    onClick: onHow
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    onClick: () => onCheck && onCheck(val)
  }, "Sprawd\u017A")));
}
Object.assign(__ds_scope, { StatusCheckCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusCheckCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
/**
 * Text-only brand wordmark. The real logo (teal circle around "pcs") was NOT
 * provided as an asset and is intentionally not recreated.
 */
function Wordmark({
  size = 20
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: size,
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--navy-800)',
      letterSpacing: '0.01em',
      lineHeight: 1
    }
  }, "polski ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "pcs"));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/NavBar.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Top navigation: wordmark left, uppercase links + account icon right.
 * transparent=true for use over the hero image.
 */
function NavBar({
  links = [],
  activeIndex = -1,
  onNavigate,
  transparent = false
}) {
  const [hover, setHover] = useState(-1);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '26px 0',
      background: transparent ? 'transparent' : 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '36px'
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(i);
    },
    onMouseEnter: () => setHover(i),
    onMouseLeave: () => setHover(-1),
    style: {
      color: i === activeIndex || i === hover ? 'var(--navy-800)' : 'var(--gray-500)',
      fontSize: '11px',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      textDecoration: 'none',
      transition: 'color .15s ease',
      whiteSpace: 'nowrap'
    }
  }, l)), /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-label": "Konto",
    style: {
      color: 'var(--navy-600)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9.3",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 18.4c1.2-2.1 3.1-3.4 5.5-3.4s4.3 1.3 5.5 3.4",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
const DS = window.PolskiPCSDesignSystem_9b91fe;
const {
  NavBar,
  Button,
  ArrowLink,
  SectionHeading,
  FeatureItem,
  ServiceTile,
  StatBar,
  CtaBanner,
  ChecklistItem,
  StatusCheckCard
} = DS;
function LucideIcon({
  name,
  size = 28
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      el.setAttribute('width', size);
      el.setAttribute('height', size);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          'stroke-width': 1.75
        }
      });
    }
  }, [name, size]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      color: 'var(--accent)'
    }
  });
}
function Container({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-pad)',
      ...style
    }
  }, children);
}
function Hero({
  onNavigate
}) {
  const [status, setStatus] = React.useState(null);
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Hero",
    style: {
      position: 'relative',
      background: 'linear-gradient(180deg, var(--bg-hero-top), var(--bg-hero-bottom))',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/hero-ship.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      height: '85%',
      maxWidth: '68%',
      objectFit: 'contain',
      objectPosition: 'right bottom',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '70px',
      left: 0,
      right: 0,
      textAlign: 'center',
      fontSize: 'clamp(120px, 16vw, 230px)',
      fontWeight: 500,
      color: 'var(--watermark)',
      letterSpacing: '.01em',
      lineHeight: 1,
      userSelect: 'none',
      whiteSpace: 'nowrap'
    }
  }, "PORT 4.0"), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    transparent: true,
    links: ["Rozwiązania", "Dla kogo", "O systemie", "Aktualności", "Kontakt"],
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '110px 0 90px',
      maxWidth: '400px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      color: 'var(--text-heading)',
      fontSize: 'var(--text-hero)',
      fontWeight: 500,
      lineHeight: 1.25
    }
  }, "Cyfrowa infrastruktura polskich port\xF3w"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '26px 0 44px',
      color: 'var(--gray-500)',
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--leading-body)',
      maxWidth: '340px'
    }
  }, "Polski PCS \u0142\u0105czy porty, przewo\u017Anik\xF3w i partner\xF3w w jednym, bezpiecznym \u015Brodowisku danych, wi\u0119ksza wydajno\u015B\u0107, pe\u0142na widoczno\u015B\u0107, mniej papieru \u2013 wi\u0119cej mo\u017Cliwo\u015Bci."), /*#__PURE__*/React.createElement(StatusCheckCard, {
    onCheck: nr => setStatus(nr ? {
      nr
    } : null)
  }), status ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '14px',
      width: '380px',
      boxSizing: 'border-box',
      background: 'var(--white)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-subtle)',
      padding: '14px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontSize: '13px',
      color: 'var(--gray-500)'
    }
  }, /*#__PURE__*/React.createElement(ChecklistItem, null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--navy-800)'
    }
  }, status.nr.toUpperCase()), " \u2014 w terminalu, odprawa zako\u0144czona. Odbi\xF3r: dzi\u015B, 14:00\u201318:00.")) : null)));
}
function Benefits() {
  const items = [{
    icon: 'trending-up',
    title: 'Wyższa efektywność',
    desc: 'Optymalizacja procesów portowych w czasie rzeczywistym.'
  }, {
    icon: 'eye',
    title: 'Pełna widoczność',
    desc: 'Dane i statusy w jednym miejscu, dostępne 24/7.'
  }, {
    icon: 'layers',
    title: 'Automatyzacja',
    desc: 'Mniej manualnych działań, więcej danych i integracji bez udziału człowieka.'
  }, {
    icon: 'shield-check',
    title: 'Zgodność i bezpieczeństwo',
    desc: 'Spełniamy najwyższe normy standardy i wymagania prawne.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Benefits",
    style: {
      background: 'var(--bg-page)',
      padding: '80px 0'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it.title,
    style: {
      padding: '0 32px',
      borderLeft: i > 0 ? '1px solid var(--divider)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(FeatureItem, {
    icon: /*#__PURE__*/React.createElement(LucideIcon, {
      name: it.icon
    }),
    title: it.title,
    description: it.desc
  }))))));
}
function Ecosystem() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Ecosystem",
    style: {
      background: 'var(--white)',
      padding: '60px 0 90px'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr 1fr',
      gap: '70px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/cranes-terminal.png",
    alt: "Suwnice terminalowe nad kontenerami",
    style: {
      width: '100%',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Port 4.0",
    title: "Zintegrowany ekosystem cyfrowy",
    description: "Polski PCS to otwarta platforma wymiany danych dla ca\u0142ej spo\u0142eczno\u015Bci portowej, oparta na zaufaniu, wiele korzy\u015Bci."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '16px',
      margin: '30px 0 34px'
    }
  }, /*#__PURE__*/React.createElement(ChecklistItem, null, "Szybka wymiana informacji"), /*#__PURE__*/React.createElement(ChecklistItem, null, "Mniej b\u0142\u0119d\xF3w i op\xF3\u017Anie\u0144"), /*#__PURE__*/React.createElement(ChecklistItem, null, "\u0141\u0105czno\u015B\u0107 i integracja"), /*#__PURE__*/React.createElement(ChecklistItem, null, "Lepsze decyzje, w czasie rzeczywistym")), /*#__PURE__*/React.createElement(ArrowLink, {
    label: "Dowiedz si\u0119 wi\u0119cej"
  })))));
}
function Modules() {
  const tiles = [{
    icon: 'workflow',
    img: '../../assets/thumb-control-tower.png',
    title: 'Zarządzanie operacjami',
    desc: 'Planowanie, monitorowanie i kontrola operacji portowych w czasie rzeczywistym.'
  }, {
    icon: 'file-text',
    img: '../../assets/thumb-container-crane.png',
    title: 'e-Dokumenty',
    desc: 'Cyfrowa obsługa dokumentów portowych i celnych.'
  }, {
    icon: 'share-2',
    img: '../../assets/thumb-container-stack.png',
    title: 'Zarządzanie zasobami',
    desc: 'Lepsze wykorzystanie nabrzeży, sprzętu i powierzchni magazynowych.'
  }, {
    icon: 'bar-chart-3',
    img: '../../assets/thumb-analytics-laptop.png',
    title: 'Analityka i raportowanie',
    desc: 'Dane, które przekładają się na skuteczne wyniki.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Modules",
    style: {
      background: 'var(--bg-page)',
      padding: '10px 0 70px'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '28px'
    }
  }, tiles.map(t => /*#__PURE__*/React.createElement(ServiceTile, {
    key: t.title,
    icon: /*#__PURE__*/React.createElement(LucideIcon, {
      name: t.icon,
      size: 26
    }),
    image: t.img,
    imageAlt: t.title,
    title: t.title,
    description: t.desc
  })))));
}
function StatsAndCta() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Stats and CTA",
    style: {
      background: 'var(--bg-page)',
      padding: '0 0 90px'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: 'grid',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement(StatBar, {
    items: [{
      value: '5',
      label: 'Portów',
      sub: 'w sieci PCS'
    }, {
      value: '120+',
      label: 'Linii żeglugowych',
      sub: 'współpracujących'
    }, {
      value: '1.2M+',
      label: 'Kontenerów rocznie',
      sub: 'obsługiwanych cyfrowo'
    }, {
      value: '99.8%',
      label: 'Dostępności systemu',
      sub: 'niezawodność 24/7'
    }, {
      value: '< 2h',
      label: 'Średni czas obsługi',
      sub: 'dokumentów portowych'
    }]
  }), /*#__PURE__*/React.createElement(CtaBanner, {
    icon: /*#__PURE__*/React.createElement(LucideIcon, {
      name: "waves",
      size: 40
    }),
    title: "Razem budujemy inteligentne porty przysz\u0142o\u015Bci",
    text: "Do\u0142\u0105cz do ekosystemu Polski PCS i rozwijaj sw\xF3j biznes szybciej i bezpieczniej.",
    buttonLabel: "Skontaktuj si\u0119"
  })));
}
function Footer() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Footer image"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ship-horizon.png",
    alt: "Kontenerowiec na horyzoncie",
    style: {
      width: '100%',
      display: 'block'
    }
  }));
}
Object.assign(window, {
  Hero,
  Benefits,
  Ecosystem,
  Modules,
  StatsAndCta,
  Footer,
  LucideIcon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ArrowLink = __ds_scope.ArrowLink;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ChecklistItem = __ds_scope.ChecklistItem;

__ds_ns.CtaBanner = __ds_scope.CtaBanner;

__ds_ns.FeatureItem = __ds_scope.FeatureItem;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.LongArrow = __ds_scope.LongArrow;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.ServiceTile = __ds_scope.ServiceTile;

__ds_ns.StatBar = __ds_scope.StatBar;

__ds_ns.StatusCheckCard = __ds_scope.StatusCheckCard;

__ds_ns.Wordmark = __ds_scope.Wordmark;

})();
