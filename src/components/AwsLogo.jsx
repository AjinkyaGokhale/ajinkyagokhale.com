// Official AWS logo mark (smile + wordmark)
export default function AwsLogo({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Amazon Web Services"
    >
      {/* AWS text */}
      <text
        x="4"
        y="42"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        fontSize="30"
        fill="#FF9900"
        letterSpacing="-1"
      >
        aws
      </text>
      {/* Orange smile / arrow */}
      <path
        d="M14 54 Q40 72 66 54"
        stroke="#FF9900"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Arrow tip right */}
      <path
        d="M60 50 L66 54 L60 60"
        stroke="#FF9900"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
