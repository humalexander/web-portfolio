import Image from 'next/image'

import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section id="skills" className="bg-neutral-950 pb-4">
      <div className={styles.rolling_skills}>
        <ul>
          <li>
            <Image
              src={'/assets/swift.svg'}
              alt="Swift"
              width={50}
              height={50}
            />
          </li>
          <li>
            <Image
              src={'/assets/kotlin.svg'}
              alt="Kotlin"
              width={50}
              height={50}
            />
          </li>
          <li>
            <Image
              src={'/assets/typescript.svg'}
              alt="TypeScript"
              width={50}
              height={50}
            />
          </li>
          <li>
            <Image
              src={'/assets/react.svg'}
              alt="React"
              width={50}
              height={50}
            />
          </li>
          <li>
            <Image src={'/assets/csharp.svg'} alt="C#" width={50} height={50} />
          </li>
          <li>
            <Image src={'/assets/mysql.svg'} alt="C#" width={50} height={50} />
          </li>
          <li>
            <Image
              src={'/assets/mongodb.svg'}
              alt="C#"
              width={50}
              height={50}
            />
          </li>
        </ul>

        <ul aria-hidden="true">
          {/* Duplicate for seamless looping */}
          <li>
            <Image
              src={'/assets/swift.svg'}
              alt="Swift"
              width={50}
              height={50}
            />
          </li>
          <li>
            <Image
              src={'/assets/kotlin.svg'}
              alt="Kotlin"
              width={50}
              height={50}
            />
          </li>
          <li>
            <Image
              src={'/assets/typescript.svg'}
              alt="TypeScript"
              width={50}
              height={50}
            />
          </li>
          <li>
            <Image
              src={'/assets/react.svg'}
              alt="React"
              width={50}
              height={50}
            />
          </li>
          <li>
            <Image src={'/assets/csharp.svg'} alt="C#" width={50} height={50} />
          </li>
          <li>
            <Image src={'/assets/mysql.svg'} alt="C#" width={50} height={50} />
          </li>
          <li>
            <Image
              src={'/assets/mongodb.svg'}
              alt="C#"
              width={50}
              height={50}
            />
          </li>
        </ul>
      </div>
    </section>
  )
}
