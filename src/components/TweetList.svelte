<script lang="ts">
  import type { Tweet } from '../util/schemas';
  export let data: { tweets: typeof Tweet[] };
</script>


<h1>TweetList</h1>
<ul>
  {#each data.tweets as tweet}
    <li>
      <p>{tweet.text}</p>
      <form method="POST" action="?/delete">
        <input type="hidden" name="id" value={tweet._id} />
        <button aria-label="Mark as complete" type="submit">Delete</button>
      </form>
      <form method="POST" action="?/update">
        <input type="hidden" name="id" value={tweet._id} />
        <input type="text" name="text" value={tweet.text} />
        <button aria-label="Mark as complete" type="submit">Update</button>
      </form>
    </li>
  {/each}
</ul>
