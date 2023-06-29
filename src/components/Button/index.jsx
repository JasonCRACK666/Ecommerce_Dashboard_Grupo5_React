const Button = ({
  loading,
  loadingMessage,
  className,
  children,
  disabled = false
}) => {
  return (
    <button
      className={`btn ${className}`}
      disabled={Boolean(loading) || disabled}
      type='submit'
    >
      {loading ? (
        <>
          {loadingMessage && <span className='me-2'>{loadingMessage}</span>}

          <span
            className='spinner-border spinner-border-sm'
            aria-hidden='true'
          />
        </>
      ) : (
        <span>{children}</span>
      )}
    </button>
  )
}

export default Button
