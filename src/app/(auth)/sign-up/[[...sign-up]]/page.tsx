import FormWrap from '@/components/FormWrap'
import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <FormWrap>
      <SignUp />
    </FormWrap>
  )
}
