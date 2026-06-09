<!-- Floating calendar illustration for the "Book a call" card. -->
<div class="pointer-events-none relative hidden shrink-0 self-center sm:block" aria-hidden="true">
  <div class="absolute -inset-5 rounded-full bg-accent/15 blur-2xl"></div>
  <div class="relative animate-floaty [animation-duration:5.5s]">
    <svg width="94" height="94" viewBox="0 0 64 64" fill="none" class="rotate-6 drop-shadow-md">
      <!-- binders -->
      <rect x="17" y="5" width="4.5" height="13" rx="2.25" fill="#1F1F1D" />
      <rect x="42.5" y="5" width="4.5" height="13" rx="2.25" fill="#1F1F1D" />
      <!-- body -->
      <rect
        x="6"
        y="12"
        width="52"
        height="46"
        rx="9"
        fill="#FFFFFF"
        stroke="#1F1F1D"
        stroke-opacity="0.1"
      />
      <!-- header -->
      <path d="M15 12h34a9 9 0 0 1 9 9v3.5H6V21a9 9 0 0 1 9-9z" fill="#2D5BE3" />
      <!-- day cells -->
      <g fill="#1F1F1D" fill-opacity="0.16">
        <circle cx="18" cy="35" r="2.6" />
        <circle cx="32" cy="35" r="2.6" />
        <circle cx="46" cy="35" r="2.6" />
        <circle cx="18" cy="47" r="2.6" />
        <circle cx="46" cy="47" r="2.6" />
      </g>
      <!-- highlighted / booked day -->
      <circle cx="32" cy="47" r="6.5" fill="#2D5BE3" />
      <path
        d="M28.8 47.2l2 2 4.4-4.4"
        stroke="#FFFFFF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</div>
