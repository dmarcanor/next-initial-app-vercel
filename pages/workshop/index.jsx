import styles from "../../components/layouts/MainLayout.module.css";
import Link from "next/link";
import {categories} from "../../helper/categories";

const getLevel = (level) => {
  console.log(level)
  return (
    <ul>
      { level.map(getElementByLevel) }
    </ul>
  )
}

const getElementByLevel = (element) => {
  if (element.categories.length) {
    getLevel(element.categories)
  }

  return (
    <li key={element.name}>{ element.name }</li>
  )
}

export default function IndexPage() {
  const menuElements = getLevel(categories)

  return (
    <div className={styles.container}>
      {
        menuElements
      }
    </div>
  );
};