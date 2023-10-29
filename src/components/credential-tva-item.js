export default function CredentialTvaItem({ label, children }) {
  return (
    <div className="font-medium leading-4">
      <span className="text-blue-900 text-[0.50rem] leading-[0.60rem] xl:text-xs">
        {label}
      </span>
      <h4 className="text-[0.55rem] leading-[0.55rem] xl:leading-3 xl:text-lg">
        {children}
      </h4>
    </div>
  )
}
