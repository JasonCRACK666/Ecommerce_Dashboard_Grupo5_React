const Button = ({
  loading,
  loadingMessage,
  styles,
  children,
  disabled = false
}) => {
  return (
    <button
      className={`btn ${styles}`}
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
