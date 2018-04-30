import { storiesOf } from '@storybook/vue'
import Input from './Input'

storiesOf('Input', module)
  .add('Input', () =>
    ({
      components: { Input },
      template: '<Input />'
    })
  )
