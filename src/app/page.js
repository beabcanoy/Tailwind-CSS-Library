"use client";

import { useState } from "react";
import Image from "next/image";

const classFamilies = [
  {
    family: "Margin",
    classes: [
      "m-0", "m-1", "m-2", "m-4", "m-6", "m-8",
      "mx-auto", "mx-2", "mx-4", "my-2", "my-4",
      "mt-2", "mt-4", "mt-6", "mb-2", "mb-4",
      "ml-2", "mr-2", "ms-4", "me-4",
    ],
  },
  {
    family: "Padding",
    classes: [
      "p-0", "p-1", "p-2", "p-3", "p-4", "p-6", "p-8",
      "px-2", "px-3", "px-4", "px-6", "py-2", "py-3",
      "py-4", "py-6", "pt-2", "pt-4", "pb-2", "pb-4",
      "pl-4", "pr-4", "ps-4", "pe-4",
    ],
  },
  {
    family: "Width & Height",
    classes: [
      "w-auto", "w-full", "w-screen", "w-fit", "w-min", "w-max",
      "w-1/2", "w-1/3", "w-2/3", "w-1/4", "w-3/4",
      "w-16", "w-32", "w-48", "w-64",
      "h-auto", "h-full", "h-screen", "h-fit",
      "h-16", "h-32", "h-48", "h-64",
      "min-h-screen", "min-h-full", "min-w-0",
      "max-w-xs", "max-w-sm", "max-w-md", "max-w-lg",
      "max-w-xl", "max-w-2xl", "max-w-4xl", "max-w-full",
    ],
  },
  {
    family: "Display & Layout",
    classes: [
      "block", "inline", "inline-block", "flex", "inline-flex",
      "grid", "inline-grid", "hidden", "flow-root", "contents",
      "container", "flex-row", "flex-col", "flex-row-reverse",
      "flex-col-reverse", "flex-wrap", "flex-nowrap",
      "flex-1", "flex-auto", "flex-none", "grow", "shrink-0",
    ],
  },
  {
    family: "Flexbox & Alignment",
    classes: [
      "items-start", "items-center", "items-end", "items-stretch",
      "items-baseline", "justify-start", "justify-center",
      "justify-end", "justify-between", "justify-around",
      "justify-evenly", "justify-items-center",
      "content-center", "content-between", "self-start",
      "self-center", "self-end", "place-items-center",
      "place-content-center", "order-first", "order-last",
    ],
  },
  {
    family: "Grid",
    classes: [
      "grid-cols-1", "grid-cols-2", "grid-cols-3", "grid-cols-4",
      "grid-cols-5", "grid-cols-6", "grid-cols-12",
      "grid-rows-1", "grid-rows-2", "grid-rows-3",
      "col-span-1", "col-span-2", "col-span-3",
      "col-span-full", "row-span-2", "row-span-full",
      "auto-cols-fr", "auto-rows-auto",
    ],
  },
  {
    family: "Gap & Spacing",
    classes: [
      "gap-0", "gap-1", "gap-2", "gap-3", "gap-4",
      "gap-6", "gap-8", "gap-x-2", "gap-x-4",
      "gap-y-2", "gap-y-4", "space-x-2", "space-x-4",
      "space-y-2", "space-y-4",
    ],
  },
  {
    family: "Typography",
    classes: [
      "text-xs", "text-sm", "text-base", "text-lg",
      "text-xl", "text-2xl", "text-3xl", "text-4xl",
      "text-5xl", "font-thin", "font-light", "font-normal",
      "font-medium", "font-semibold", "font-bold", "font-black",
      "italic", "not-italic", "uppercase", "lowercase",
      "capitalize", "normal-case", "text-left", "text-center",
      "text-right", "text-justify", "leading-none",
      "leading-tight", "leading-normal", "leading-relaxed",
      "tracking-tight", "tracking-normal", "tracking-wide",
      "truncate", "break-words", "break-all", "whitespace-nowrap",
      "underline", "no-underline", "line-through",
    ],
  },
  {
    family: "Text Colors",
    classes: [
      "text-white", "text-black", "text-transparent",
      "text-slate-500", "text-slate-700", "text-slate-900",
      "text-gray-400", "text-gray-500", "text-gray-700",
      "text-gray-900", "text-red-500", "text-red-600",
      "text-green-500", "text-green-600", "text-blue-500",
      "text-blue-600", "text-indigo-600", "text-purple-600",
      "text-pink-600", "text-rose-500", "text-amber-600",
    ],
  },
  {
    family: "Backgrounds",
    classes: [
      "bg-white", "bg-black", "bg-transparent",
      "bg-slate-50", "bg-slate-100", "bg-slate-200",
      "bg-gray-100", "bg-gray-200", "bg-gray-800",
      "bg-gray-900", "bg-red-100", "bg-red-500",
      "bg-green-100", "bg-green-500", "bg-blue-50",
      "bg-blue-100", "bg-blue-500", "bg-blue-600",
      "bg-indigo-100", "bg-indigo-600", "bg-purple-100",
      "bg-pink-100", "bg-rose-50", "bg-rose-100",
      "bg-yellow-100", "bg-amber-100",
    ],
  },
  {
    family: "Borders & Radius",
    classes: [
      "border", "border-0", "border-2", "border-4",
      "border-solid", "border-dashed", "border-dotted",
      "border-gray-200", "border-gray-300", "border-blue-500",
      "rounded-none", "rounded-sm", "rounded", "rounded-md",
      "rounded-lg", "rounded-xl", "rounded-2xl",
      "rounded-3xl", "rounded-full",
      "divide-y", "divide-x", "divide-gray-200",
    ],
  },
  {
    family: "Effects",
    classes: [
      "shadow-none", "shadow-sm", "shadow", "shadow-md",
      "shadow-lg", "shadow-xl", "shadow-2xl",
      "opacity-0", "opacity-25", "opacity-50", "opacity-75",
      "opacity-100", "blur-sm", "blur", "blur-md",
      "ring-1", "ring-2", "ring-4", "ring-blue-500",
      "outline-none", "drop-shadow-md",
    ],
  },
  {
    family: "Position & Overflow",
    classes: [
      "static", "relative", "absolute", "fixed", "sticky",
      "inset-0", "top-0", "right-0", "bottom-0", "left-0",
      "z-0", "z-10", "z-20", "z-50",
      "overflow-hidden", "overflow-auto", "overflow-scroll",
      "overflow-visible", "overflow-x-auto", "overflow-y-auto",
    ],
  },
  {
    family: "Images & Aspect Ratio",
    classes: [
      "object-contain", "object-cover", "object-fill",
      "object-none", "object-center", "object-top",
      "object-bottom", "aspect-auto", "aspect-square",
      "aspect-video",
    ],
  },
  {
    family: "Interaction",
    classes: [
      "cursor-pointer", "cursor-default", "cursor-not-allowed",
      "select-none", "select-text", "select-all",
      "pointer-events-none", "pointer-events-auto",
      "resize", "resize-none", "appearance-none",
    ],
  },
  {
    family: "Transitions & Transforms",
    classes: [
      "transition", "transition-all", "transition-colors",
      "transition-opacity", "transition-transform",
      "duration-150", "duration-200", "duration-300",
      "duration-500", "ease-in", "ease-out", "ease-in-out",
      "scale-95", "scale-100", "scale-105", "scale-110",
      "rotate-3", "rotate-6", "rotate-12",
      "-rotate-6", "translate-y-1", "-translate-y-1",
      "translate-x-1", "transform",
    ],
  },
  {
    family: "Hover & Focus",
    classes: [
      "hover:bg-blue-700", "hover:bg-gray-100",
      "hover:text-blue-600", "hover:shadow-lg",
      "hover:scale-105", "hover:opacity-80",
      "focus:outline-none", "focus:ring-2",
      "focus:ring-blue-500", "focus:border-blue-500",
      "focus-visible:ring-2", "active:scale-95",
      "disabled:opacity-50", "disabled:cursor-not-allowed",
      "group-hover:text-blue-600",
    ],
  },
  {
    family: "Responsive",
    classes: [
      "sm:block", "sm:flex", "sm:grid", "sm:hidden",
      "sm:flex-row", "sm:flex-col", "sm:p-4", "sm:px-6",
      "sm:text-lg", "sm:w-full", "sm:w-1/2",
      "md:block", "md:flex", "md:grid", "md:hidden",
      "md:grid-cols-2", "md:grid-cols-3", "md:flex-row",
      "md:p-6", "md:px-8", "md:text-xl", "md:w-1/2",
      "lg:block", "lg:flex", "lg:grid", "lg:hidden",
      "lg:grid-cols-3", "lg:grid-cols-4", "lg:p-8",
      "lg:text-2xl", "lg:w-1/3", "xl:grid-cols-4",
      "2xl:max-w-7xl",
    ],
  },
  {
    family: "Accessibility & Misc",
    classes: [
      "sr-only", "not-sr-only", "visible", "invisible",
      "antialiased", "subpixel-antialiased", "list-none",
      "list-disc", "list-decimal", "pointer-events-auto",
    ],
  },
];

const htmlElements = [
  "main", "div", "section", "article", "aside",
  "header", "footer", "nav", "address",
  "h1", "h2", "h3", "h4", "h5", "h6",
  "p", "span", "strong", "em", "b", "i", "u", "s",
  "small", "mark", "del", "ins", "sub", "sup", "abbr",
  "blockquote", "q", "cite", "code", "pre", "kbd",
  "a", "button",
  "img", "picture", "source", "video", "audio", "track",
  "iframe", "canvas", "svg",
  "form", "label", "input", "textarea", "select", "option",
  "optgroup", "fieldset", "legend", "datalist", "output",
  "progress", "meter",
  "ul", "ol", "li", "dl", "dt", "dd",
  "table", "caption", "colgroup", "col", "thead",
  "tbody", "tfoot", "tr", "th", "td",
  "figure", "figcaption", "details", "summary", "dialog",
  "time", "data", "hr", "br", "wbr",
  "noscript", "template",
];

const uiComponents = [
  "Button", "Icon Button", "Card", "Image Card",
  "Profile Card", "Product Card", "Pricing Card",
  "Hero Section", "Navbar", "Sidebar", "Footer",
  "Search Bar", "Login Form", "Registration Form",
  "Contact Form", "Dropdown", "Select Menu",
  "Modal", "Alert", "Badge", "Avatar",
  "Breadcrumb", "Pagination", "Tabs", "Accordion",
  "Tooltip", "Toast", "Notification",
  "Loading Spinner", "Progress Bar", "Skeleton",
  "Checkbox", "Radio Group", "Toggle Switch",
  "Table", "Data Table", "Empty State",
  "Stats Card", "Dashboard Layout", "Feature Card",
  "Testimonial Card", "Pricing Table", "FAQ Section",
];

const voidElements = [
  "area", "base", "br", "col", "embed", "hr", "img",
  "input", "link", "meta", "param", "source", "track", "wbr",
];

const contentByTag = {
  main: "Main content goes here.",
  div: "Your content here.",
  section: "Section content goes here.",
  article: "Article content goes here.",
  aside: "Sidebar content goes here.",
  header: "Header content goes here.",
  footer: "Footer content goes here.",
  nav: "Home  About  Contact",
  address: "Contact information",
  h1: "Page Heading",
  h2: "Section Heading",
  h3: "Subheading",
  h4: "Heading",
  h5: "Heading",
  h6: "Heading",
  p: "This is a paragraph.",
  span: "Inline text",
  strong: "Important text",
  em: "Emphasized text",
  b: "Bold text",
  i: "Italic text",
  u: "Underlined text",
  s: "Strikethrough text",
  small: "Small text",
  mark: "Highlighted text",
  del: "Deleted text",
  ins: "Inserted text",
  sub: "Subscript",
  sup: "Superscript",
  abbr: "HTML",
  blockquote: "A quoted passage.",
  q: "A short quotation.",
  cite: "Source title",
  code: "const greeting = 'Hello';",
  pre: "Preformatted text",
  kbd: "Ctrl + C",
  a: "Link text",
  button: "Click Me",
  label: "Email address",
  option: "Choose an option",
  optgroup: "Options",
  legend: "Form information",
  output: "Result",
  progress: "Loading",
  meter: "Meter",
  ul: "List items",
  ol: "Numbered items",
  li: "List item",
  dl: "Description list",
  dt: "Term",
  dd: "Term description",
  caption: "Table caption",
  colgroup: "Table columns",
  thead: "Table header",
  tbody: "Table body",
  tfoot: "Table footer",
  tr: "Table row",
  th: "Heading",
  td: "Cell content",
  figure: "Figure content",
  figcaption: "Image caption",
  details: "Additional details",
  summary: "More information",
  dialog: "Dialog content",
  time: "October 28, 2026",
  data: "Data value",
  noscript: "JavaScript is unavailable.",
  template: "Template content",
};

const componentMarkup = {
  Button: `<button type="button" className="...">Click Me</button>`,
  "Icon Button": `<button type="button" aria-label="Settings" className="...">⚙</button>`,
  Card: `<div className="...">
  <h2 className="text-xl font-bold">Card title</h2>
  <p className="mt-2">Card description</p>
</div>`,
  "Image Card": `<article className="...">
  <img src="/my-image.jpg" alt="Description" className="w-full object-cover" />
  <h2 className="mt-3 text-xl font-bold">Image title</h2>
  <p>Image description</p>
</article>`,
  "Profile Card": `<article className="...">
  <img src="/my-image.jpg" alt="Profile" className="h-20 w-20 rounded-full object-cover" />
  <h2 className="mt-3 text-xl font-bold">Your Name</h2>
  <p>Profile description</p>
</article>`,
  "Product Card": `<article className="...">
  <img src="/my-image.jpg" alt="Product" className="w-full object-cover" />
  <h2 className="mt-3 text-xl font-bold">Product name</h2>
  <p className="mt-2">₱499</p>
  <button className="mt-3">Add to cart</button>
</article>`,
  "Pricing Card": `<article className="...">
  <h2 className="text-xl font-bold">Basic Plan</h2>
  <p className="my-4 text-3xl font-bold">₱499</p>
  <button>Choose Plan</button>
</article>`,
  "Hero Section": `<section className="...">
  <h1 className="text-4xl font-bold">Welcome</h1>
  <p className="mt-4">Introduce your website here.</p>
  <button className="mt-6">Get Started</button>
</section>`,
  Navbar: `<nav className="...">
  <a href="/" className="font-bold">MyApp</a>
  <div className="flex gap-4">
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </div>
</nav>`,
  Sidebar: `<aside className="...">
  <nav className="flex flex-col gap-3">
    <a href="/">Dashboard</a>
    <a href="/profile">Profile</a>
    <a href="/settings">Settings</a>
  </nav>
</aside>`,
  Footer: `<footer className="...">
  <p>© 2026 My Website</p>
</footer>`,
  "Search Bar": `<form className="...">
  <input type="search" placeholder="Search..." />
  <button type="submit">Search</button>
</form>`,
  "Login Form": `<form className="...">
  <label htmlFor="email">Email</label>
  <input id="email" type="email" required />
  <label htmlFor="password">Password</label>
  <input id="password" type="password" required />
  <button type="submit">Log In</button>
</form>`,
  "Registration Form": `<form className="...">
  <label htmlFor="name">Name</label>
  <input id="name" name="name" required />
  <label htmlFor="email">Email</label>
  <input id="email" type="email" required />
  <label htmlFor="password">Password</label>
  <input id="password" type="password" required />
  <button type="submit">Register</button>
</form>`,
  "Contact Form": `<form className="...">
  <label htmlFor="name">Name</label>
  <input id="name" required />
  <label htmlFor="message">Message</label>
  <textarea id="message" rows={4} />
  <button type="submit">Send Message</button>
</form>`,
  Dropdown: `<details className="...">
  <summary>Open menu</summary>
  <a href="/profile">Profile</a>
  <a href="/settings">Settings</a>
</details>`,
  "Select Menu": `<label htmlFor="choice">Choose an option</label>
<select id="choice" className="...">
  <option>Option one</option>
  <option>Option two</option>
</select>`,
  Modal: `<dialog open className="...">
  <h2 className="text-xl font-bold">Modal title</h2>
  <p className="my-4">Modal content</p>
  <button>Close</button>
</dialog>`,
  Alert: `<div role="alert" className="...">
  Important information goes here.
</div>`,
  Badge: `<span className="...">Active</span>`,
  Avatar: `<img src="/img/pikapika.jpg" alt="User avatar" className="..." />`,
  Breadcrumb: `<nav aria-label="Breadcrumb" className="...">
  <ol className="flex gap-2">
    <li><a href="/">Home</a></li>
    <li aria-current="page">Current page</li>
  </ol>
</nav>`,
  Pagination: `<nav aria-label="Pagination" className="...">
  <a href="?page=1">1</a>
  <a href="?page=2">2</a>
  <a href="?page=3">3</a>
</nav>`,
  Tabs: `<div className="...">
  <div role="tablist">
    <button role="tab">Overview</button>
    <button role="tab">Details</button>
  </div>
  <div role="tabpanel">Tab content</div>
</div>`,
  Accordion: `<details className="...">
  <summary>Frequently asked question</summary>
  <p className="mt-2">Answer goes here.</p>
</details>`,
  Tooltip: `<span title="Helpful information" className="...">
  Hover over me
</span>`,
  Toast: `<div role="status" className="...">
  Your changes have been saved.
</div>`,
  Notification: `<div role="status" className="...">
  You have a new notification.
</div>`,
  "Loading Spinner": `<div role="status" className="...">
  <span className="sr-only">Loading...</span>
  Loading...
</div>`,
  "Progress Bar": `<div role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} className="...">
  <div className="h-full w-3/5 bg-blue-600" />
</div>`,
  Skeleton: `<div aria-hidden="true" className="...">
  <div className="h-4 w-1/2 rounded bg-gray-200" />
  <div className="mt-3 h-4 rounded bg-gray-200" />
</div>`,
  Checkbox: `<label className="...">
  <input type="checkbox" />
  Accept the terms
</label>`,
  "Radio Group": `<fieldset className="...">
  <legend>Choose an option</legend>
  <label><input type="radio" name="choice" value="one" /> Option one</label>
  <label><input type="radio" name="choice" value="two" /> Option two</label>
</fieldset>`,
  "Toggle Switch": `<label className="...">
  <input type="checkbox" role="switch" />
  Enable notifications
</label>`,
  Table: `<table className="...">
  <thead><tr><th>Name</th><th>Status</th></tr></thead>
  <tbody>
    <tr><td>Example</td><td>Active</td></tr>
  </tbody>
</table>`,
  "Data Table": `<table className="...">
  <thead><tr><th>Name</th><th>Email</th><th>Status</th></tr></thead>
  <tbody>
    <tr><td>Alex</td><td>alex@example.com</td><td>Active</td></tr>
  </tbody>
</table>`,
  "Empty State": `<div className="...">
  <h2 className="text-xl font-bold">Nothing here yet</h2>
  <p className="mt-2">Your items will appear here.</p>
  <button className="mt-4">Create item</button>
</div>`,
  "Stats Card": `<article className="...">
  <p>Total users</p>
  <p className="mt-2 text-3xl font-bold">1,250</p>
  <p className="mt-2 text-sm">+12% this month</p>
</article>`,
  "Dashboard Layout": `<div className="...">
  <header className="mb-4">Dashboard header</header>
  <div className="grid gap-4 md:grid-cols-3">
    <section>Card one</section>
    <section>Card two</section>
    <section>Card three</section>
  </div>
  <main className="mt-4">Main dashboard content</main>
</div>`,
  "Feature Card": `<article className="...">
  <h2 className="text-xl font-bold">Feature title</h2>
  <p className="mt-2">Describe the feature here.</p>
</article>`,
  "Testimonial Card": `<figure className="...">
  <blockquote>“This product made my work easier.”</blockquote>
  <figcaption className="mt-3 font-semibold">Customer name</figcaption>
</figure>`,
  "Pricing Table": `<div className="... grid gap-4 md:grid-cols-3">
  <article><h2>Basic</h2><p>₱199/month</p></article>
  <article><h2>Pro</h2><p>₱499/month</p></article>
  <article><h2>Premium</h2><p>₱999/month</p></article>
</div>`,
  "FAQ Section": `<section className="...">
  <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
  <details className="mt-4">
    <summary>How does it work?</summary>
    <p className="mt-2">Read the answer here.</p>
  </details>
</section>`,
};

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export default function Home() {
  const [mode, setMode] = useState("HTML Elements");
  const [element, setElement] = useState("main");
  const [component, setComponent] = useState("Card");

  // Each entry represents one separate class dropdown.
  const [classSlots, setClassSlots] = useState([
    "mx-auto",
    "w-full",
    "max-w-4xl",
    "bg-white",
    "p-6",
    "rounded-xl",
    "shadow-md",
  ]);

  const [copyMessage, setCopyMessage] = useState("");

  const selectedClasses = classSlots.filter(Boolean);
  const className = selectedClasses.join(" ");

  function updateSlot(index, value) {
    setClassSlots((current) =>
      current.map((item, i) => (i === index ? value : item))
    );
    setCopyMessage("");
  }

  function addSlot() {
    setClassSlots((current) => [...current, ""]);
  }

  function removeSlot(index) {
    setClassSlots((current) => current.filter((_, i) => i !== index));
    setCopyMessage("");
  }

  function resetBuilder() {
    setMode("HTML Elements");
    setElement("main");
    setComponent("Card");
    setClassSlots([
      "mx-auto",
      "w-full",
      "max-w-4xl",
      "bg-white",
      "p-6",
      "rounded-xl",
      "shadow-md",
    ]);
    setCopyMessage("");
  }

  function getGeneratedCode() {
    const classes = className;
    const tag = element;

    if (mode === "UI Components") {
      const template =
        componentMarkup[component] ||
        `<div className="...">Component content</div>`;

      return template.replaceAll('className="..."', `className="${classes}"`);
    }

    const classAttribute = `className="${classes}"`;

    if (tag === "img") {
      return `<img src="/img/pikapika.jpg" alt="Description of my image" ${classAttribute} />`;
    }

    if (tag === "input") {
      return `<input type="text" placeholder="Enter text..." ${classAttribute} />`;
    }

    if (tag === "source") {
      return `<source src="/my-video.mp4" type="video/mp4" />`;
    }

    if (tag === "col") {
      return `<col ${classAttribute} />`;
    }

    if (tag === "br" || tag === "hr" || tag === "wbr") {
      return `<${tag} ${classAttribute} />`;
    }

    if (tag === "textarea") {
      return `<textarea placeholder="Enter text..." ${classAttribute}></textarea>`;
    }

    if (tag === "select") {
      return `<select ${classAttribute}>
  <option value="">Choose an option</option>
  <option value="one">Option one</option>
  <option value="two">Option two</option>
</select>`;
    }

    if (tag === "form") {
      return `<form ${classAttribute}>
  <label htmlFor="email">Email</label>
  <input id="email" type="email" name="email" required />
  <button type="submit">Submit</button>
</form>`;
    }

    if (tag === "video" || tag === "audio") {
      return `<${tag} controls ${classAttribute}>
  <source src="/my-${tag}.${tag === "video" ? "mp4" : "mp3"}" type="${tag}/${tag === "video" ? "mp4" : "mpeg"}" />
  Your browser does not support this media.
</${tag}>`;
    }

    if (tag === "picture") {
      return `<picture>
  <source srcSet="/img/pikapika.webp" type="image/webp" />
  <img src="/img/pikapika.jpg" alt="My image" ${classAttribute} />
</picture>`;
    }

    if (tag === "iframe") {
      return `<iframe src="https://example.com" title="Embedded content" ${classAttribute}></iframe>`;
    }

    if (tag === "canvas") {
      return `<canvas width={300} height={150} ${classAttribute}>
  Your browser does not support canvas.
</canvas>`;
    }

    if (tag === "svg") {
      return `<svg viewBox="0 0 24 24" aria-hidden="true" ${classAttribute}>
  <circle cx="12" cy="12" r="10" fill="currentColor" />
</svg>`;
    }

    if (tag === "ul" || tag === "ol") {
      return `<${tag} ${classAttribute}>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</${tag}>`;
    }

    if (tag === "dl") {
      return `<dl ${classAttribute}>
  <dt>Term</dt>
  <dd>Term description</dd>
</dl>`;
    }

    if (tag === "table") {
      return `<table ${classAttribute}>
  <thead>
    <tr><th>Name</th><th>Status</th></tr>
  </thead>
  <tbody>
    <tr><td>Example</td><td>Active</td></tr>
  </tbody>
</table>`;
    }

    if (tag === "thead" || tag === "tbody" || tag === "tfoot") {
      return `<${tag} ${classAttribute}>
  <tr><td>Table content</td></tr>
</${tag}>`;
    }

    if (tag === "tr") {
      return `<tr ${classAttribute}><td>Cell content</td></tr>`;
    }

    if (tag === "colgroup") {
      return `<colgroup ${classAttribute}>
  <col />
  <col />
</colgroup>`;
    }

    if (tag === "figure") {
      return `<figure ${classAttribute}>
  <img src="/img/pikapika.jpg" alt="Description" />
  <figcaption>Image caption</figcaption>
</figure>`;
    }

    if (tag === "details") {
      return `<details ${classAttribute}>
  <summary>More information</summary>
  <p>Additional details go here.</p>
</details>`;
    }

    if (tag === "dialog") {
      return `<dialog open ${classAttribute}>
  <h2>Dialog title</h2>
  <p>Dialog content</p>
  <button>Close</button>
</dialog>`;
    }

    if (tag === "progress") {
      return `<progress value={60} max={100} ${classAttribute}>60%</progress>`;
    }

    if (tag === "meter") {
      return `<meter value={0.7} min={0} max={1} ${classAttribute}>70%</meter>`;
    }

    if (tag === "time") {
      return `<time dateTime="2026-10-28" ${classAttribute}>October 28, 2026</time>`;
    }

    if (tag === "data") {
      return `<data value="123" ${classAttribute}>Item 123</data>`;
    }

    if (tag === "label") {
      return `<label htmlFor="field" ${classAttribute}>Email address</label>`;
    }

    if (tag === "button") {
      return `<button type="button" ${classAttribute}>Click Me</button>`;
    }

    if (tag === "a") {
      return `<a href="#" ${classAttribute}>Link text</a>`;
    }

    if (tag === "input") {
      return `<input type="text" ${classAttribute} />`;
    }

    if (voidElements.includes(tag)) {
      return `<${tag} ${classAttribute} />`;
    }

    const content = contentByTag[tag] || "Your content here.";

    return `<${tag} ${classAttribute}>${content}</${tag}>`;
  }

  function getPreviewContent() {
    if (mode === "UI Components") {
      switch (component) {
        case "Button":
        case "Icon Button":
          return (
            <button type="button" className={className}>
              {component === "Button" ? "Click Me" : "⚙"}
            </button>
          );

        case "Navbar":
          return (
            <nav className={className}>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <strong>MyApp</strong>
                <div className="flex flex-wrap gap-3">
                  <a href="#home">Home</a>
                  <a href="#about">About</a>
                  <a href="#contact">Contact</a>
                </div>
              </div>
            </nav>
          );

        case "Image Card":
        case "Profile Card":
        case "Product Card":
          return (
            <article className={className}>
              <Image
                src="/img/pikapika.jpg"
                alt="Your own image"
                className="mb-3 w-full rounded-lg object-cover"
                width={800}
                height={600}
              />
              <h3 className="text-xl font-bold">
                {component === "Profile Card"
                  ? "Your Name"
                  : component === "Product Card"
                    ? "Product name"
                    : "Image Card"}
              </h3>
              <p className="mt-2 text-sm">
                Your component description.
              </p>
              {component === "Product Card" && (
                <button className="mt-3 rounded bg-blue-600 px-3 py-2 text-white">
                  Add to cart
                </button>
              )}
            </article>
          );

        case "Hero Section":
          return (
            <section className={className}>
              <h1 className="text-3xl font-bold">Welcome</h1>
              <p className="mt-3">
                Introduce your website here.
              </p>
              <button className="mt-5 rounded bg-blue-600 px-4 py-2 text-white">
                Get Started
              </button>
            </section>
          );

        case "Login Form":
        case "Registration Form":
        case "Contact Form":
          return (
            <form
              className={className}
              onSubmit={(event) => event.preventDefault()}
            >
              <label htmlFor="preview-name">Name or email</label>
              <input
                id="preview-name"
                type="text"
                placeholder="Enter your information"
                className="mt-1 w-full rounded border p-2"
              />
              <button
                type="submit"
                className="mt-3 rounded bg-blue-600 px-4 py-2 text-white"
              >
                {component === "Login Form"
                  ? "Log In"
                  : component === "Contact Form"
                    ? "Send Message"
                    : "Register"}
              </button>
            </form>
          );

        case "Dropdown":
        case "Accordion":
          return (
            <details className={className}>
              <summary>Open to see more</summary>
              <p className="mt-2">Additional content goes here.</p>
            </details>
          );

        case "Badge":
          return <span className={className}>Active</span>;

        case "Avatar":
          return (
            <Image
              src="/img/pikapika.jpg"
              alt="User avatar"
              width={800}
              height={600}
              className={className}
            />
          );

        case "Alert":
        case "Toast":
        case "Notification":
          return (
            <div role="status" className={className}>
              Your message goes here.
            </div>
          );

        case "Breadcrumb":
          return (
            <nav aria-label="Breadcrumb" className={className}>
              <ol className="flex flex-wrap gap-2">
                <li>Home /</li>
                <li>Current page</li>
              </ol>
            </nav>
          );

        case "Pagination":
          return (
            <nav aria-label="Pagination" className={className}>
              <div className="flex gap-2">
                {[1, 2, 3].map((page) => (
                  <a
                    key={page}
                    href={`?page=${page}`}
                    className="rounded border px-3 py-2"
                  >
                    {page}
                  </a>
                ))}
              </div>
            </nav>
          );

        case "Table":
        case "Data Table":
          return (
            <table className={className}>
              <thead>
                <tr>
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">Example</td>
                  <td className="p-2">Active</td>
                </tr>
              </tbody>
            </table>
          );

        case "Stats Card":
          return (
            <article className={className}>
              <p>Total users</p>
              <p className="mt-2 text-3xl font-bold">1,250</p>
              <p className="mt-2 text-sm">+12% this month</p>
            </article>
          );

        case "Pricing Card":
          return (
            <article className={className}>
              <h2 className="text-xl font-bold">Basic Plan</h2>
              <p className="my-4 text-3xl font-bold">₱499</p>
              <button className="rounded bg-blue-600 px-4 py-2 text-white">
                Choose Plan
              </button>
            </article>
          );

        case "Modal":
          return (
            <div className={className}>
              <h2 className="text-xl font-bold">Modal title</h2>
              <p className="my-3">Modal content</p>
              <button className="rounded bg-blue-600 px-3 py-2 text-white">
                Close preview
              </button>
            </div>
          );

        case "Search Bar":
          return (
            <form
              className={`${className} flex flex-wrap gap-2`}
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                type="search"
                placeholder="Search..."
                className="min-w-0 flex-1 rounded border p-2"
              />
              <button className="rounded bg-blue-600 px-3 py-2 text-white">
                Search
              </button>
            </form>
          );

        case "Checkbox":
          return (
            <label className={`${className} flex items-center gap-2`}>
              <input type="checkbox" />
              Accept the terms
            </label>
          );

        case "Radio Group":
          return (
            <fieldset className={className}>
              <legend>Choose an option</legend>
              <label className="mt-2 block">
                <input type="radio" name="preview-radio" /> Option one
              </label>
              <label className="mt-2 block">
                <input type="radio" name="preview-radio" /> Option two
              </label>
            </fieldset>
          );

        case "Toggle Switch":
          return (
            <label className={`${className} flex items-center gap-2`}>
              <input type="checkbox" role="switch" />
              Enable notifications
            </label>
          );

        case "Progress Bar":
          return (
            <div
              role="progressbar"
              aria-valuenow={60}
              aria-valuemin={0}
              aria-valuemax={100}
              className={`${className} h-4 overflow-hidden rounded-full bg-gray-200`}
            >
              <div className="h-full w-3/5 bg-blue-600" />
            </div>
          );

        case "Loading Spinner":
          return (
            <div className={className} role="status">
              Loading...
            </div>
          );

        case "Skeleton":
          return (
            <div className={className} aria-hidden="true">
              <div className="h-4 w-1/2 rounded bg-gray-200" />
              <div className="mt-3 h-4 rounded bg-gray-200" />
            </div>
          );

        case "Tooltip":
          return (
            <span title="Helpful information" className={className}>
              Hover over me
            </span>
          );

        case "Empty State":
          return (
            <div className={className}>
              <h2 className="text-xl font-bold">Nothing here yet</h2>
              <p className="mt-2">Your items will appear here.</p>
              <button className="mt-4 rounded bg-blue-600 px-3 py-2 text-white">
                Create item
              </button>
            </div>
          );

        case "Testimonial Card":
          return (
            <figure className={className}>
              <blockquote>
                “This product made my work easier.”
              </blockquote>
              <figcaption className="mt-3 font-semibold">
                Customer name
              </figcaption>
            </figure>
          );

        case "Feature Card":
          return (
            <article className={className}>
              <h2 className="text-xl font-bold">Feature title</h2>
              <p className="mt-2">Feature description goes here.</p>
            </article>
          );

        case "FAQ Section":
          return (
            <section className={className}>
              <h2 className="text-xl font-bold">
                Frequently Asked Questions
              </h2>
              <details className="mt-4">
                <summary>How does it work?</summary>
                <p className="mt-2">Read the answer here.</p>
              </details>
            </section>
          );

        default:
          return (
            <div className={className}>
              <h2 className="text-xl font-bold">{component}</h2>
              <p className="mt-2">
                This is a preview of your {component.toLowerCase()}.
              </p>
            </div>
          );
      }
    }

    if (element === "img") {
      return (
        <Image
          src="/img/pikapika.jpg"
          alt="Your own image"
          width={800}
          height={600}
          className={className}
        />
      );
    }

    if (element === "input") {
      return (
        <input
          type="text"
          placeholder="Enter text..."
          className={className}
        />
      );
    }

    if (element === "textarea") {
      return (
        <textarea
          placeholder="Enter text..."
          rows={3}
          className={className}
        />
      );
    }

    if (element === "select") {
      return (
        <select className={className} defaultValue="">
          <option value="">Choose an option</option>
          <option value="one">Option one</option>
          <option value="two">Option two</option>
        </select>
      );
    }

    if (element === "button") {
      return (
        <button type="button" className={className}>
          Click Me
        </button>
      );
    }

    if (element === "a") {
      return (
        <a href="#preview" className={className}>
          Link text
        </a>
      );
    }

    if (element === "video" || element === "audio") {
      return (
        <div className={className}>
          <p className="mb-2">{element.toUpperCase()} preview</p>
          <p className="text-sm">
            Add your media file in the public folder to display it.
          </p>
        </div>
      );
    }

    if (element === "picture") {
      return (
        <Image
          src="/img/pikapika.jpg"
          alt="Your own image"
          width={800}
          height={600}
          className={className}
        />
      );
    }

    if (element === "form") {
      return (
        <form
          className={className}
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor="preview-email">Email</label>
          <input
            id="preview-email"
            type="email"
            placeholder="you@example.com"
            className="mt-1 w-full rounded border p-2"
          />
          <button
            type="submit"
            className="mt-3 rounded bg-blue-600 px-3 py-2 text-white"
          >
            Submit
          </button>
        </form>
      );
    }

    if (element === "ul" || element === "ol") {
      const ListTag = element;

      return (
        <ListTag className={className}>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ListTag>
      );
    }

    if (element === "table") {
      return (
        <table className={className}>
          <thead>
            <tr>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Example</td>
              <td className="p-2">Active</td>
            </tr>
          </tbody>
        </table>
      );
    }

    if (element === "figure") {
      return (
        <figure className={className}>
          <Image
            src="/img/pikapika.jpg"
            alt="Your own image"
            width={800}
            height={600}
            className="w-full rounded-lg"
          />
          <figcaption className="mt-2 text-sm">
            Image caption
          </figcaption>
        </figure>
      );
    }

    if (element === "details") {
      return (
        <details className={className}>
          <summary>More information</summary>
          <p className="mt-2">Additional details go here.</p>
        </details>
      );
    }

    if (element === "dialog") {
      return (
        <div className={className} role="dialog" aria-label="Dialog preview">
          <h2 className="text-xl font-bold">Dialog title</h2>
          <p className="my-3">Dialog content</p>
        </div>
      );
    }

    if (element === "progress") {
      return (
        <progress className={className} value={60} max={100}>
          60%
        </progress>
      );
    }

    if (element === "meter") {
      return (
        <meter className={className} value={0.7} min={0} max={1}>
          70%
        </meter>
      );
    }

    if (element === "svg") {
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          aria-label="Sample circle"
          role="img"
        >
          <circle cx="12" cy="12" r="10" fill="currentColor" />
        </svg>
      );
    }

    const Tag = element;
    const content = contentByTag[element] || "Sample content";

    return <Tag className={className}>{content}</Tag>;
  }

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(getGeneratedCode());
      setCopyMessage("Copied!");
    } catch {
      setCopyMessage("Copy failed. Select the code and copy it manually.");
    }
  }

  return (
    <main className="min-h-screen bg-slate-100 px-3 py-6 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Developer Toolkit
          </p>

          <h1 className="mt-2 text-3xl font-black sm:text-4xl">
            Tailwind CSS Library
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Build HTML elements and reusable UI components by combining
            Tailwind CSS classes through separate dropdowns.
          </p>
        </header>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          {/* BUILDER */}
          <section className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <h2 className="text-xl font-bold">Component Builder</h2>

            <p className="mt-1 text-sm text-slate-500">
              Choose your element and build its className.
            </p>

            <label
              htmlFor="mode"
              className="mb-2 mt-5 block text-sm font-semibold"
            >
              Library type
            </label>

            <select
              id="mode"
              value={mode}
              onChange={(event) => setMode(event.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option>HTML Elements</option>
              <option>UI Components</option>
            </select>

            {mode === "HTML Elements" ? (
              <>
                <label
                  htmlFor="element"
                  className="mb-2 mt-4 block text-sm font-semibold"
                >
                  HTML element
                </label>

                <select
                  id="element"
                  value={element}
                  onChange={(event) => setElement(event.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm outline-none focus:border-blue-500"
                >
                  {htmlElements.map((tag) => (
                    <option key={tag} value={tag}>
                      {"<" + tag + ">"}
                    </option>
                  ))}
                </select>
              </>
            ) : (
              <>
                <label
                  htmlFor="component"
                  className="mb-2 mt-4 block text-sm font-semibold"
                >
                  UI component
                </label>

                <select
                  id="component"
                  value={component}
                  onChange={(event) => setComponent(event.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm outline-none focus:border-blue-500"
                >
                  {uiComponents.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </>
            )}

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-bold">Tailwind class dropdowns</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Each dropdown selects one class from a family.
                </p>
              </div>

              <button
                type="button"
                onClick={addSlot}
                className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700"
              >
                + Add class
              </button>
            </div>

            <div className="mt-4 space-y-3">
              {classSlots.map((selectedClass, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[minmax(0,1fr)_40px] items-center gap-2"
                >
                  <div>
                    <label
                      htmlFor={`class-${index}`}
                      className="mb-1 block text-xs font-semibold text-slate-500"
                    >
                      Class {index + 1}
                    </label>

                    <select
                      id={`class-${index}`}
                      value={selectedClass}
                      onChange={(event) =>
                        updateSlot(index, event.target.value)
                      }
                      className="w-full min-w-0 rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    >
                      <option value="">Choose a class...</option>

                      {classFamilies.map((group) => (
                        <optgroup key={group.family} label={group.family}>
                          {group.classes.map((utility) => (
                            <option key={utility} value={utility}>
                              {utility}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeSlot(index)}
                    aria-label={`Remove class ${index + 1}`}
                    title="Remove this dropdown"
                    className="mt-5 flex h-10 w-10 items-center justify-center rounded-lg border border-red-200 text-lg text-red-600 hover:bg-red-50"
                  >
                    ×
                  </button>
                </div>
              ))}

              {classSlots.length === 0 && (
                <p className="rounded-lg bg-slate-50 p-4 text-sm text-slate-500">
                  No class dropdowns. Click “Add class” to start.
                </p>
              )}
            </div>

            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between gap-2">
                <h3 className="text-sm font-bold">Combined className</h3>

                <button
                  type="button"
                  onClick={() => setClassSlots([])}
                  className="text-xs font-semibold text-red-600 hover:text-red-800"
                >
                  Clear classes
                </button>
              </div>

              <div className="break-words rounded-xl bg-slate-900 p-4 font-mono text-sm leading-6 text-emerald-300">
                {className || "(no classes selected)"}
              </div>

              <p className="mt-2 text-xs text-slate-500">
                Selected classes are combined automatically with spaces.
              </p>
            </div>
          </section>

          {/* PREVIEW + CODE */}
          <div className="min-w-0 space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-xl font-bold">Live Preview</h2>

                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                  Live
                </span>
              </div>

              <p className="mt-1 text-sm text-slate-500">
                Your selected classes are applied here.
              </p>

              <div className="mt-5 min-h-64 overflow-auto rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 sm:p-6">
                {getPreviewContent()}
              </div>

              <div className="mt-4">
                <h3 className="mb-2 text-sm font-bold">
                  Active classes ({selectedClasses.length})
                </h3>

                <div className="flex flex-wrap gap-2">
                  {selectedClasses.length > 0 ? (
                    selectedClasses.map((item, index) => (
                      <span
                        key={`${item}-${index}`}
                        className="max-w-full break-all rounded-md bg-blue-50 px-2 py-1 font-mono text-xs text-blue-700"
                      >
                        {item}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-slate-500">
                      No classes selected.
                    </span>
                  )}
                </div>
              </div>
            </section>

            <section className="min-w-0 rounded-2xl bg-slate-950 p-4 text-white shadow-sm sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold">Generated JSX</h2>
                  <p className="mt-1 text-sm text-slate-400">
                    Copy the generated code into your component.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={copyCode}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
                >
                  Copy code
                </button>
              </div>

              {copyMessage && (
                <p className="mt-3 text-sm text-emerald-300">
                  {copyMessage}
                </p>
              )}

              <pre className="mt-4 max-h-[420px] overflow-auto whitespace-pre-wrap break-words rounded-xl bg-slate-900 p-4 text-xs leading-6 text-emerald-300 sm:text-sm">
                {getGeneratedCode()}
              </pre>

              <button
                type="button"
                onClick={resetBuilder}
                className="mt-4 rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 hover:bg-slate-800"
              >
                Reset builder
              </button>
            </section>
          </div>
        </div>

        <footer className="mt-8 border-t border-slate-200 py-5 text-center text-xs text-slate-500">
          Tailwind CSS Library · Next.js · React
        </footer>
      </div>
    </main>
  );
}