<script context="module" lang="ts">
  
  // Import the necessary components
  import Navbar from '../components/Navbar.svelte';
  import Sidebar from '../components/Sidebar.svelte';
  import TweetList from '../components/TweetList.svelte';
  import TweetForm from '../components/TweetForm.svelte';
  import Profile from '../components/Profile.svelte';
  import FollowButton from '../components/FollowButton.svelte';

</script>

<script  lang="ts">
  import type { Tweet } from '../util/schemas';
  export let data: { tweets: typeof Tweet[] };
</script>

<Navbar />
<Sidebar />
<main>
  {#if data.tweets.length > 0}
    <TweetList {data} />
  {:else}
    <p>No tweets yet!</p>
  {/if}
  <TweetForm />
  <Profile />
  <FollowButton />
</main>
