import React, { type HTMLProps } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface LangSwitcherProps extends Omit<HTMLProps<HTMLButtonElement>, 'className'> {
  className?: string
  short?: boolean
}

export const LangSwitcher = ({ className, short = false }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const toggle = (): void => {
    void (async (): Promise<any> => {
      await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    })()
  }
  return (
    <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.BACKGROUND_INVERTED}
            onClick={toggle}
        >
      { t(short ? 'language_short' : 'language') }
    </Button>
  )
}
