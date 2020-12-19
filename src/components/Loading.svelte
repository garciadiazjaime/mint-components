<style>
  @keyframes small-expand {
    0%,
    100% {
      box-shadow: 12px -22px 0 0 #d66840, 12px 2px 0 0 #d66840,
      -12px 2px 0 0 #d66840, -12px -22px 0 0 #d66840;
      opacity: 0.7;
    }
    
    50% {
      box-shadow: 0 -10px 0 0 #d66840, 0 -10px 0 0 #d66840,
      0 -10px 0 0 #d66840, 0 -10px 0 0 #d66840;
      width: 6px;
      height: 6px;
      opacity: 1;
    }
  }

  @keyframes big-expand {
    0%,
    100% {
      box-shadow: 20px -35px 0 0 #d66840, 20px 5px 0 0 #d66840,
      -20px 5px 0 0 #d66840, -20px -35px 0 0 #d66840;
      opacity: 0.7;
    }
    
    50% {
      box-shadow: 0 -15px 0 0 #d66840, 0 -15px 0 0 #d66840,
      0 -15px 0 0 #d66840, 0 -15px 0 0 #d66840;
      width: 9px;
      height: 9px;
      opacity: 1;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    
    100% {
      transform: rotate(359deg);
    }
  }

  /* stylelint-disable a11y/media-prefers-reduced-motion */
  .spinner {
    width: 6px;
    height: 6px;
    animation: rotate 1s infinite linear;
  }
  .spinner:after {
    content: " ";
    display: block;
    position: relative;
    top: 10px;
    animation: small-expand 1.5s infinite ease-out;
    /* Edge needs the initial state of the box shadow to be defined in the component, removing this will break it */
    box-shadow: 12px -22px 0 0 #d66840, 12px 2px 0 0 #d66840,
    -12px 2px 0 0 #d66840, -12px -22px 0 0 #d66840;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    opacity: 0.7;
  } 

  @media screen and (prefers-reduced-motion) {
    .spinner:after {
      content: "Loading...";
      animation: none;
      box-shadow: none;
      width: 0;
      height: 0;
      top: 0;
    }
  }
  
  @media screen and (prefers-reduced-motion) {
    .spinner:after {
      animation: none;
      padding: 0;
      width: 0;
      height: 0;
    }
  }

  /* stylelint-enable a11y/media-prefers-reduced-motion */
  .spinner.big {
    width: 9px;
    height: 9px;
  }

  .spinner.big:after {
    content: " ";
    display: block;
    animation: big-expand 1.5s infinite ease-out;
    /* Edge needs the initial state of the box shadow to be defined in the component, removing this will break it */
    box-shadow: 20px -35px 0 0 #d66840, 20px 5px 0 0 #d66840,
    -20px 5px 0 0 #d66840, -20px -35px 0 0 #d66840;
    width: 6px;
    height: 6px;
    top: 15px;
    border-radius: 50%;
    opacity: 0.7;
  }

  @media screen and (prefers-reduced-motion) {
    .spinner.big:after {
      content: "Loading...";
      animation: none;
      box-shadow: none;
      width: 0;
      height: 0;
      top: 0;
    }
  }
    
  @media screen and (prefers-reduced-motion) {
    .spinner.big:after {
      animation: none;
      padding: 0;
      width: 0;
      height: 0;
    }
  }
</style>
<div class="spinner big" />

