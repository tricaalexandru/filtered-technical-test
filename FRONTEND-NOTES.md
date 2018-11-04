Name: Mike Hurl
Email: mikehurl@gmail.com
Time to complete: ~7 hours in total

Notes:
Took a very relaxed approach to the task so did not work straight through, but for some context:
- Began work on Saturday 3rd November by ~11:30; finished by ~23:30
- Began work on Sunday 4th November by ~17:00; finished main task by ~20:00; 
    added animations and ensured codebase was in a suitable state by by ~20:30


Initially, I decided that based on the initial render and the task that I would break down the app like so:
Header component
  Number of assets component
  Type of asset component
  Number of type of assets component

Sidebar component
  Asset component

Assets Preview component
  reuse Asset component

  As I worked my way through the app I ended up with:
  Header component

  Sidebar component
    AssetList component
      Asset component
  
  Preview component
    AssetList component
      Asset component

I feel the end result allows for an easy refactor if the acceptance criteria were changed due to it's overall simplicity and specificity.

  Other potential approaches
    Have one assetReducer which passes a prop to Asset. The prop could be something like isInSidebar and could be set to true for every asset. On clicking the asset, an action would be dispatched that set this prop to false. The Sidebar and Preview would each be attached to this assetReducer with the Sidebar using conditional logic to render assets with isInSidebar as true and vice versa for the Preview.
    Have a specific headerReducer. On an asset being clicked, dispatch e.g updateCountForTotalNumber() - this would be an alternative to measuring the length of arrays in the previewReducer