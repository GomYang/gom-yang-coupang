export interface DefaultErrorProps {
  onClick: VoidFunction
}

function DefaultError({ onClick }: DefaultErrorProps) {
  return (
    <div>
      Error
      <button onClick={onClick} type="button">
        확인
      </button>
    </div>
  )
}

export default DefaultError
