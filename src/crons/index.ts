import { tokensRemover } from "./remove-old-tokens.cron";

export const runAllCronJobs = () => {
  tokensRemover.start();
};
