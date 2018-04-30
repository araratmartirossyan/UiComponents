import { storiesOf } from '@storybook/vue'
import Button from './Button'

storiesOf('Button', module)
  .add('Button', () =>
    ({
      components: { Button },
      template: '<Button title="Hello" />'
    })
  )
