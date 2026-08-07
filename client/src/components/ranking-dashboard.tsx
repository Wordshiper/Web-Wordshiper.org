import React, { useState } from 'react';
import { Trophy, Users, Globe, Calendar, TrendingUp, Medal, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface RankingEntry {
  rank: number;
  name: string;
  location: string;
  versesMemorized: number;
  points: number;
  streak: number;
}

interface RankingDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

const globalRankings: RankingEntry[] = [
  { rank: 1, name: "Sarah Kim", location: "Seoul, Korea", versesMemorized: 127, points: 2840, streak: 45 },
  { rank: 2, name: "David Johnson", location: "Texas, USA", versesMemorized: 115, points: 2650, streak: 38 },
  { rank: 3, name: "Maria Santos", location: "São Paulo, Brazil", versesMemorized: 108, points: 2480, streak: 42 },
  { rank: 4, name: "James Chen", location: "Singapore", versesMemorized: 102, points: 2350, streak: 29 },
  { rank: 5, name: "Grace Okafor", location: "Lagos, Nigeria", versesMemorized: 98, points: 2220, streak: 35 },
];

const countryRankings: RankingEntry[] = [
  { rank: 1, name: "한국 연합교회", location: "전국", versesMemorized: 1250, points: 28400, streak: 12 },
  { rank: 2, name: "미국 침례교회", location: "전국", versesMemorized: 1180, points: 26800, streak: 8 },
  { rank: 3, name: "브라질 오순절교회", location: "전국", versesMemorized: 1050, points: 24200, streak: 15 },
  { rank: 4, name: "나이지리아 성결교회", location: "전국", versesMemorized: 980, points: 22600, streak: 6 },
  { rank: 5, name: "싱가포르 장로교회", location: "전국", versesMemorized: 850, points: 19800, streak: 9 },
];

const churchRankings: RankingEntry[] = [
  { rank: 1, name: "사랑의교회", location: "서울", versesMemorized: 456, points: 10840, streak: 23 },
  { rank: 2, name: "온누리교회", location: "서울", versesMemorized: 423, points: 9950, streak: 18 },
  { rank: 3, name: "명성교회", location: "서울", versesMemorized: 389, points: 9120, streak: 21 },
  { rank: 4, name: "여의도순복음교회", location: "서울", versesMemorized: 356, points: 8340, streak: 14 },
  { rank: 5, name: "분당우리교회", location: "경기", versesMemorized: 334, points: 7820, streak: 16 },
];

export function RankingDashboard({ isOpen, onClose }: RankingDashboardProps) {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  const [selectedCategory, setSelectedCategory] = useState('global');

  if (!isOpen) return null;

  const getRankingData = () => {
    switch (selectedCategory) {
      case 'global': return globalRankings;
      case 'country': return countryRankings;
      case 'church': return churchRankings;
      default: return globalRankings;
    }
  };

  const getRankingIcon = (rank: number) => {
    if (rank === 1) return <Medal className="w-6 h-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />;
    if (rank === 3) return <Medal className="w-6 h-6 text-amber-600" />;
    return <span className="w-6 h-6 flex items-center justify-center text-sm font-bold text-gray-600">#{rank}</span>;
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Trophy className="w-8 h-8 text-yellow-500" />
              <h2 className="text-2xl font-bold text-gray-900">글로벌 랭킹</h2>
            </div>
            <Button variant="outline" onClick={onClose}>
              닫기
            </Button>
          </div>

          {/* Period Selection */}
          <div className="mb-6">
            <div className="flex gap-2">
              <Button
                variant={selectedPeriod === 'monthly' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedPeriod('monthly')}
              >
                월간
              </Button>
              <Button
                variant={selectedPeriod === 'quarterly' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedPeriod('quarterly')}
              >
                분기
              </Button>
              <Button
                variant={selectedPeriod === 'yearly' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedPeriod('yearly')}
              >
                연간
              </Button>
            </div>
          </div>

          {/* Category Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="global" className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                글로벌
              </TabsTrigger>
              <TabsTrigger value="country" className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                국가별
              </TabsTrigger>
              <TabsTrigger value="church" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                교회별
              </TabsTrigger>
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-6">
              {/* Statistics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      총 참가자
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900">
                      {selectedCategory === 'global' ? '12,547' : 
                       selectedCategory === 'country' ? '2,847' : '1,247'}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      암송된 구절
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-600">
                      {selectedCategory === 'global' ? '45,892' : 
                       selectedCategory === 'country' ? '8,934' : '3,247'}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      평균 연속일
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">
                      {selectedCategory === 'global' ? '28' : 
                       selectedCategory === 'country' ? '31' : '42'} 일
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      이번 달 신규
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-purple-600">
                      +{selectedCategory === 'global' ? '1,247' : 
                          selectedCategory === 'country' ? '234' : '89'}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Ranking List */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    {selectedPeriod === 'monthly' ? '월간' : 
                     selectedPeriod === 'quarterly' ? '분기' : '연간'} 순위
                    ({selectedCategory === 'global' ? '글로벌' : 
                      selectedCategory === 'country' ? '국가별' : '교회별'})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {getRankingData().map((entry) => (
                      <div
                        key={entry.rank}
                        className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                          entry.rank <= 3 
                            ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200' 
                            : 'bg-gray-50 border-gray-200'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          {getRankingIcon(entry.rank)}
                          <div>
                            <h3 className="font-semibold text-gray-900">{entry.name}</h3>
                            <p className="text-sm text-gray-600">{entry.location}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-6 text-sm">
                          <div className="text-center">
                            <p className="font-semibold text-blue-600">{entry.versesMemorized}</p>
                            <p className="text-gray-500">구절</p>
                          </div>
                          <div className="text-center">
                            <p className="font-semibold text-green-600">{entry.points.toLocaleString()}</p>
                            <p className="text-gray-500">점수</p>
                          </div>
                          <div className="text-center">
                            <p className="font-semibold text-orange-600">{entry.streak}</p>
                            <p className="text-gray-500">연속일</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}