export interface ProfileAnalyticsProps {
  growth: Array<{ month: string; value: number }>
  transactions: Array<{ name: string; value: number }>
}
