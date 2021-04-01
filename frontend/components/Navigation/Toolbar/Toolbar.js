import classes from "./Toolbar.module.css"
import Image from 'next/image'

const Toolbar = () => (
    <header className={classes.Toolbar}>
        Hello!
        <Image src="/logoBlack.svg" height={50} width={50} />
    </header>
)

export default Toolbar;