<script context="module" lang="ts">
  // Import the necessary components
  import App from '../components/App.svelte';
  import Navbar from '../components/Navbar.svelte';
  import Sidebar from '../components/Sidebar.svelte';
  import Tweet from '../components/Tweet.svelte';
  import TweetList from '../components/TweetList.svelte';
  import TweetForm from '../components/TweetForm.svelte';
  import Profile from '../components/Profile.svelte';
  import FollowButton from '../components/FollowButton.svelte';

  // Define the load function
  export async function load({ page }: { page: { slug: string } }) {
    const res = await fetch(`https://example.com/api/pages/${page.slug}`);
    const data = await res.json();
    return { props: { page: data } };
  }
</script>

<script lang="ts">
  // Define the getUrl function
  export function getUrl({ params }: { params: { slug: string } }) {
    return `/page/${params.slug}`;
  }

  // Define the page prop
  export let page: { title: string; content: string };
</script>

<App>
  <Navbar />
  <Sidebar />
  <main>
    <TweetList />
    <TweetForm />
    <Profile />
    <FollowButton />
  </main>
</App>
