"use client";

import type { FC } from "react";
import { FaGift, FaLock, FaUsers } from "react-icons/fa";
import type { ActionCard } from "../../../../types/domain";
import type { ReputationGatedActionsProps } from "./types";

const ReputationGatedActions: FC<ReputationGatedActionsProps> = ({
  actions,
}) => {
  const defaultActions: ActionCard[] = [
    {
      icon: <FaGift className="w-6 h-6" />,
      title: "Claim Early Adopter NFT",
      description: "Exclusive reward for users with > 500 reputation.",
      buttonText: "Claim Reward",
      unlocked: false,
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Join Governance Council",
      description: "Vote on protocol proposals. Requires > 800 reputation.",
      buttonText: "Join Campaign",
      unlocked: false,
    },
  ];

  const actionCards = actions || defaultActions;

  return (
    <div className="space-y-6 mt-10">
      <h2 className="text-2xl font-bold text-white mb-4">
        Reputation-Gated Actions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {actionCards.map((action, index) => (
          <div
            key={index}
            className="border rounded-3xl p-6 h-64 flex flex-col relative overflow-hidden"
            style={{
              backgroundColor: "#161616",
              borderColor: "#323232",
              borderWidth: "1px",
            }}
          >
            <div className="flex items-start space-x-4 mb-4">
              <div
                className="shrink-0 p-3 rounded-lg border"
                style={{
                  backgroundColor: "#434343",
                  borderColor: "#757575",
                  borderWidth: "1px",
                  color: action.unlocked ? "#FFFFFF" : "#898989",
                }}
              >
                {action.icon}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-md font-bold text-white">
                    {action.title}
                  </h3>
                  {!action.unlocked && (
                    <div
                      className="flex items-center space-x-1 px-3 py-1 rounded-md"
                      style={{ backgroundColor: "#FFFFFF" }}
                    >
                      <FaLock className="w-3 h-3 text-gray-400" />
                      <span className="text-xs font-medium text-gray-400">
                        Locked
                      </span>
                    </div>
                  )}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {action.description}
                </p>
              </div>
            </div>

            <div className="mt-auto">
              <button
                className="w-full font-medium py-3 px-4 rounded-lg transition-colors"
                style={{
                  backgroundColor: action.unlocked ? "#FFFFFF" : "#4A4A4A",
                  color: action.unlocked ? "#000000" : "#898989",
                }}
                disabled={!action.unlocked}
              >
                {action.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReputationGatedActions;
