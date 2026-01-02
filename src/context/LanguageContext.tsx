"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ja' | 'en';

type Translations = {
    nav: {
        home: string;
        about: string;
        news: string;
        contact: string;
        join: string;
    };
    hero: {
        badge: string;
        title_prefix: string;
        title_highlight: string;
        description: string;
        join: string;
        projects: string;
    };
    about: {
        title: string;
        description: string;
        features: {
            title: string;
            description: string;
        }[];
    };
    news: {
        title: string;
        subtitle: string;
        article: {
            headline: string;
            subheadline: string;
            content: string;
            quote: string;
            quoteAuthor: string;
            features: {
                label: string;
                value: string;
            }[];
            readMore: string;
            visitHQ: string;
        };
    };
    contact: {
        title: string;
        description: string;
        discord: string;
        email: string;
        rights: string;
        branch: string;
        types: {
            community: {
                title: string;
                features: string[];
            };
            partner: {
                title: string;
                description: string;
                note: string;
            };
        };
    };
    whyJapan: {
        title: string;
        subtitle: string;
        description: string;
        features: { title: string; description: string; }[];
    };
};

const translations: Record<Language, Translations> = {
    ja: {
        nav: {
            home: "ホーム",
            about: "Encodeについて",
            news: "最新の活動",
            contact: "お問い合わせ",
            join: "参加する",
        },
        hero: {
            badge: "歴史上の最重要テクノロジー",
            title_prefix: "AIの未来を",
            title_highlight: "正しく導く",
            description: "人工知能は豊かさと繁栄をもたらす可能性がありますが、同時に社会への脅威となるリスクも孕んでいます。Encode Japanは、AI支持・人間中心・イノベーション重視の立場から、賢明な政策を通じてAIの可能性を守るEncodeの日本支部です。",
            join: "コミュニティに参加",
            projects: "プロジェクトを見る",
        },
        about: {
            title: "Encode<br />Japanとは？",
            description: "Encodeは世界15カ国以上に展開するAIガバナンスのユースネットワークです。私たちは進歩とイノベーションを支持します。だからこそ、賢明かつタイムリーな政策提言と教育を通じて、この歴史的な転換期において人類をサポートし、AIの約束された未来を実現することを目指しています。",
            features: [
                {
                    title: "グローバルネットワーク",
                    description: "ワシントンDCの本部と連携し、世界中の若きボランティアと共に活動しています。",
                },
                {
                    title: "政策提言",
                    description: "AIの可能性を最大化しリスクを最小化するための、超党派による政策提言を行っています。",
                },
                {
                    title: "教育と啓発",
                    description: "次世代がAI時代を生き抜くための知識とスキルを身につける場を提供します。",
                },
                {
                    title: "イノベーション",
                    description: "最先端の技術を活用し、学生自身が未来を創造するためのプロジェクトを推進します。",
                },
            ],
        },
        news: {
            title: "最新アクション",
            subtitle: "AIの安全性と公益を守るための戦い",
            article: {
                headline: "OpenAI訴訟：イーロン・マスク氏を支持し意見書を提出",
                subheadline: "AIの父ジェフリー・ヒントン氏らがEncodeの動きを支持",
                content: "Encodeは、OpenAIの営利企業への移行を阻止するため、イーロン・マスク氏による差止命令請求を支持するアミカスブリーフ（法廷助言書）の提出を申請しました。OpenAIが「公益のためのAI開発」という本来の使命を放棄し、一部の投資家の利益を優先することは、人類全体への裏切りに他なりません。",
                quote: "「都合が悪くなったからといって憲章を破り捨てることを許せば、エコシステム全体に非常に悪いメッセージを送ることになる。」",
                quoteAuthor: "ジェフリー・ヒントン (2024年ノーベル賞受賞者)",
                features: [
                    { label: "イーロン・マスク氏", value: "差止請求を支持" },
                    { label: "ジェフリー・ヒントン氏", value: "Encodeを支持" },
                    { label: "スチュアート・ラッセル氏", value: "共同署名" },
                    { label: "Sneha Revanur", value: "Encode代表声明" }
                ],
                readMore: "ニュースを読む",
                visitHQ: "本部サイト"
            }
        },
        contact: {
            title: "イノベーションの準備は？",
            description: "学ぶ意欲のある学生の方も、コラボレーションをお探しのパートナーの方も、今すぐEncode Japanコミュニティの一員になりましょう。",
            discord: "Discordに参加",
            email: "お問い合わせ",
            rights: "All rights reserved.",
            branch: "encodeai.org の支部",
            types: {
                community: {
                    title: "コミュニティに参加",
                    features: [
                        "無料で誰でも参加可能",
                        "AIや未来に興味のある方歓迎",
                        "研究や提言活動への参加機会"
                    ]
                },
                partner: {
                    title: "企業・大学・団体様",
                    description: "大学との連携、コラボレーション、取材、その他のお問い合わせはこちら。",
                    note: "※ 問題がありましたら左のコミュニティ内でお問い合わせいただくと対応がスムーズです。"
                }
            }
        },
        whyJapan: {
            title: "なぜ日本？",
            subtitle: "世界のAI戦略における日本の重要性",
            description: "日本は、G7におけるAI議論を主導し、技術的な受容性が高く、かつリスクに対する独自の視点を持っています。このユニークな立ち位置が、世界的なAI安全性の枠組みを構築する上で、日本を欠かせない存在にしています。",
            features: [
                { title: "G7リーダーシップ", description: "広島AIプロセスの主導" },
                { title: "技術的受容性", description: "AIと共存する文化的土壌" },
                { title: "地政学的要衝", description: "アジア太平洋のハブ" }
            ]
        },
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            news: "Latest Actions",
            contact: "Contact",
            join: "Join Us",
        },
        hero: {
            badge: "HISTORY'S MOST TRANSFORMATIVE TECH",
            title_prefix: "Steering the Future of",
            title_highlight: "Artificial Intelligence",
            description: "Artificial intelligence has the potential to bring abundance and prosperity, but it also carries risks that threaten society. Encode Japan is the Japanese branch of Encode, defending the potential of AI through smart policy from a pro-AI, pro-human, and pro-innovation standpoint.",
            join: "Join our Community",
            projects: "View Projects",
        },
        about: {
            title: "What is<br />Encode Japan?",
            description: "Encode is a youth network for AI governance spanning 15+ countries worldwide. We are pro-progress and pro-innovation. That's exactly why we want to keep AI's promise alive through smart, timely policy action and education, supporting humanity in this time of unprecedented transition.",
            features: [
                {
                    title: "Global Network",
                    description: "Headquartered in Washington, DC and supported by an international network of young volunteers.",
                },
                {
                    title: "Policy Action",
                    description: "Advocating for smart, timely policy to keep AI's promise alive and mitigate its risks.",
                },
                {
                    title: "Public Education",
                    description: "Working to support humanity through education in this time of unprecedented transition.",
                },
                {
                    title: "Innovation Focus",
                    description: "Leveraging state-of-the-art tech to drive student-led projects and create the future.",
                },
            ],
        },
        news: {
            title: "Latest Actions",
            subtitle: "Defending AI Safety & Public Interest",
            article: {
                headline: "Encode Files Amicus Brief in OpenAI Case",
                subheadline: "Supported by Geoffrey Hinton & Backing Elon Musk",
                content: "Encode has officially requested to file an amicus brief supporting Elon Musk’s injunction to halt OpenAI’s transition to a for-profit entity. We argue that OpenAI’s conversion would undermine its mission to utilize transformative technology for the public benefit.",
                quote: "“Allowing it to tear all of that up when it becomes inconvenient sends a very bad message to other actors in the ecosystem.”",
                quoteAuthor: "Geoffrey Hinton (2024 Nobel Laureate)",
                features: [
                    { label: "Elon Musk", value: "Injunction Support" },
                    { label: "Geoffrey Hinton", value: " Endorses Encode" },
                    { label: "Stuart Russell", value: "Co-signed Brief" },
                    { label: "Sneha Revanur", value: "Official Statement" }
                ],
                readMore: "Read the News",
                visitHQ: "Visit HQ"
            }
        },
        contact: {
            title: "Ready to Innovate?",
            description: "Whether you're a student looking to learn or a partner looking to collaborate, become part of the Encode Japan community today.",
            discord: "Join Discord",
            email: "Contact Us",
            rights: "All rights reserved.",
            branch: "A branch of encodeai.org",
            types: {
                community: {
                    title: "Join Community",
                    features: [
                        "Free and open to everyone",
                        "Welcoming all interested in AI & Future",
                        "Opportunities to join research & advocacies"
                    ]
                },
                partner: {
                    title: "Universities & Partners",
                    description: "For academic collaborations, partnerships, press, and other inquiries.",
                    note: "* For faster support, please contact us via the community on the left."
                }
            }
        },
        whyJapan: {
            title: "Why Japan?",
            subtitle: "Crucial Role in Global AI Strategy",
            description: "Japan leads G7 AI discussions, possesses high technological acceptance, and holds a unique perspective on risks. This positioning makes Japan indispensable in building global AI safety frameworks.",
            features: [
                { title: "G7 Leadership", description: "Leading the Hiroshima AI Process" },
                { title: "Tech Acceptance", description: "Cultural foundation for AI coexistence" },
                { title: "Geopolitical Hub", description: "Strategic bridge in Asia-Pacific" }
            ]
        },
    },
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('ja');

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
