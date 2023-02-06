function WelcomeMessage() {
  return (
    <div>
      <p>This is just a simple test to ensure the AWS CodePipeline is working properly.</p>
    </div>
  );
}

export default function Content() {
  return (
    <section>
      <h1>Welcome to the new DMPTool React pages.</h1>
      <WelcomeMessage />
    </section>
  );
}
