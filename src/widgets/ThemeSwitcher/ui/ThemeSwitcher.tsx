import React, { type HTMLProps } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Theme, useTheme } from 'app/providers/ThemeProvider'

import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps extends Omit<HTMLProps<HTMLElement>, 'className'> {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps): React.ReactElement => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
        >
      { theme === Theme.DARK ? <DarkIcon /> : <LightIcon /> }
    </Button>
  )
}
