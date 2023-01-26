import { A } from 'solid-start';

export default function Home() {
  return (
    <ul>
      <li>
        <A href='/mrna-transcription' class='text-blue-500 hover:underline'>
          mRNA Transcription
        </A>
      </li>
      <li>
        <A href='/nitrogenous-bases' class='text-blue-500 hover:underline'>
          Nitrogenous Bases
        </A>
      </li>
    </ul>
  );
}
