import type { ApiResponse, ReputationQuickData } from "./types";

class ApiClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";
  }

  private async request<T>(endpoint: string): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}/api${endpoint}`;
    
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  async getReputationQuick(walletAddress: string): Promise<ReputationQuickData> {
    const response = await this.request<ReputationQuickData>(`/reputation/${walletAddress}/quick`);
    
    if (!response.success) {
      throw new Error(response.message || "API request failed");
    }
    
    return response.data;
  }
}

export const apiClient = new ApiClient();