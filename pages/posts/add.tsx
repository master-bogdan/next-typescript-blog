import AddPostForm from 'components/AddPostForm';
import Link from 'next/link';

const add = () => {
  return (
    <div>
      <Link href="/">
        back
      </Link>
      <AddPostForm />
    </div>
  )
}

export default add;
