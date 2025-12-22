import React from 'react';
import { Microscope, Users, BookOpen, Globe, Award, CheckCircle, TrendingUp, Network, LucideIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface StatsProps {
  darkMode: boolean;
}

interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
}

interface Achievement {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const Stats: React.FC<StatsProps> = ({ darkMode }) => {
  const { t } = useLanguage();
  const textSecondaryClass = darkMode ? 'text-slate-400' : 'text-gray-600';
  const cardBgClass = darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-gray-200';
  const hoverBorderClass = darkMode ? 'hover:border-blue-500/50' : 'hover:border-blue-400/50';

  const stats: StatItem[] = [
    { label: t('stats.projects'), value: '50+', icon: Microscope },
    { label: t('stats.researchers'), value: '100+', icon: Users },
    { label: t('stats.publications'), value: '200+', icon: BookOpen },
    { label: t('stats.partners'), value: '30+', icon: Globe },
  ];

  const achievements: Achievement[] = [
    { icon: Award, title: t('stats.presidential'), description: t('stats.presidentialDesc') },
    { icon: CheckCircle, title: t('stats.iso'), description: t('stats.isoDesc') },
    { icon: TrendingUp, title: t('stats.digital2030'), description: t('stats.digital2030Desc') },
    { icon: Network, title: t('stats.collaboration'), description: t('stats.collaborationDesc') },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`absolute inset-0 ${
                  darkMode
                    ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20'
                    : 'bg-gradient-to-br from-blue-200/50 to-purple-200/50'
                } rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}
              ></div>
              <div
                className={`relative ${cardBgClass} backdrop-blur-sm border rounded-2xl p-6 ${hoverBorderClass} transition-all duration-300`}
              >
                <Icon className="w-8 h-8 text-blue-500 mb-4" />
                <h3
                  className={`text-3xl ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  } mb-2`}
                >
                  {stat.value}
                </h3>
                <p className={`${textSecondaryClass} text-sm`}>{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Achievements */}
      <div className="grid md:grid-cols-4 gap-6 mt-12">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <div
              key={index}
              className={`${cardBgClass} backdrop-blur-sm border rounded-xl p-6 ${hoverBorderClass} transition-all duration-300 text-center`}
            >
              <Icon className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h4
                className={`${
                  darkMode ? 'text-white' : 'text-gray-900'
                } mb-1`}
              >
                {achievement.title}
              </h4>
              <p className={`${textSecondaryClass} text-sm`}>
                {achievement.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};