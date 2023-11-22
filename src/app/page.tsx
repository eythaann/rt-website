import { Button } from '../components/Button';

import styles from './page.module.css';

export default function () {
  return <main>
    <section className={styles.mainSection}>
      <h1>Make complex types easier!</h1>
      <p>
        Readable Types help you to create complex types using some out of the box utils.
        With this library you can forget create most of the common utils that typescript developers uses also
        the library includes the best library for testing util types!
      </p>

      <div className={styles.actions}>
        <Button>Get Started</Button>
        <Button type="secondary">How Testing Types?</Button>
      </div>
    </section>
    <section className={styles.secondSection}>
      <h1>Explore the Features</h1>
      <ul className={styles.featureList}>
        <p>
          Dive into the powerful features of Readable Types and discover how they can improve your TypeScript development experience:
        </p>
        <li>
          <strong>Readable Type Definitions:</strong> Say goodbye to cryptic type definitions. Our library makes your code more human-readable and understandable.
        </li>
        <li>
          <strong>Out-of-the-Box Utilities:</strong> Save time by using our pre-built utilities for common tasks like type validation, manipulation, and more.
        </li>
        <li>
          <strong>Type-Safe Testing:</strong> Ensure your code is robust and error-free with our comprehensive testing utility types.
        </li>
        <li>
          <strong>Easy Integration:</strong> Readable Types seamlessly integrates with your TypeScript projects. Getting started is a breeze.
        </li>
      </ul>
    </section>
  </main>;
}