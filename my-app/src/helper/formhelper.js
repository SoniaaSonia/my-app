export const renderField = ({
  input,
  className,
  placeholder,
  label,
  type,
  meta,
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input
        {...input}
        placeholder={placeholder}
        className={className}
        type={type}
        style={{
          borderBottom: meta.touched && meta.error ? "1px solid red" : "",
        }}
      />
      {meta.touched && meta.error && (
        <p style={{ color: "red" }}>{meta.error}</p>
      )}
    </div>
  </div>
);

export const selectField = ({ input, label, meta, children }) => (
  <div>
    <label>{label}</label>
    {console.log(meta)}
    <select
      style={{
        borderBottom:
          meta.touched && meta.error ? "1px solid red" : "1px solid",
      }}
      {...input}
    >
      {children}
    </select>
    {meta.touched && meta.error && <p style={{ color: "red" }}>{meta.error}</p>}
  </div>
);
