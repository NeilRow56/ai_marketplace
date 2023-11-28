import FormWrap from '@/components/FormWrap'
import StartSellingForm from '@/components/shop/StartSellingForm'

type Props = {}

const CreateShop = (props: Props) => {
  return (
    <div>
      <FormWrap>
        <StartSellingForm />
      </FormWrap>
    </div>
  )
}

export default CreateShop
