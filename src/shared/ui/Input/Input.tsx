import React, {
  type ChangeEvent,
  type InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  label?: string
  onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
  const { className, value, type = 'text', onChange, label, autoFocus, ...otherProps } = props
  const inputRef = useRef<HTMLInputElement>(null)

  const [isFocused, setIsFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true)
      inputRef?.current?.focus()
    }
  }, [autoFocus])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    if (onChange) {
      onChange(value)
      setCaretPosition(value.length)
    }
  }

  const onBlur = () => {
    setIsFocused(false)
  }

  const onFocus = () => {
    setIsFocused(true)
  }

  const onSelect = (event: ChangeEvent<HTMLInputElement>) => {
    setCaretPosition(event.target.selectionStart ?? 0)
  }

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      { label && <div className={cls.label}>
        {`${label}>`}
      </div> }
      <div className={cls.caretWrapper}>
        <input
          type={type}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          className={cls.input}
          ref={inputRef}
          value={value}
          {...otherProps}
        />
        {isFocused && (
          <span className={cls.caret} style={{ left: `${caretPosition * 9}px` }}/>
        )}
      </div>
    </div>

  )
})
