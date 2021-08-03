import Head from "next/head";
import Image from "next/image";
import MainLayout from "../components/common/MainLayout";
import MetaHead from '../components/common/Head'

export default function Home() {
  return (
    <MainLayout>
      <>
      <MetaHead />
        <div>
            <div>
                <h1>heading 1</h1>
                <h1>heading 2</h1>
                <h1>heading 3</h1>
                <h1>heading 4</h1>
                <h1>heading 5</h1>
                <h1>heading 6</h1>
            </div>
            <div>
                <p>Paragraph</p>
                <a href="">Link</a>
                <span>Span</span>
            </div>
            <div>
                <h1>Inputs</h1>
            </div>
        </div>
      </>
    </MainLayout>
  );
}
