const switchButtons = document.querySelectorAll("[data-lang-switch]");
const paperDetails = {
  "WREN: Low light image enhancement using retinex theory-based double U-Net-like structures": {
    descriptionJa:
      "Retinex理論に基づき，低照度画像を安定して高品質に復元する深層学習手法を提案した研究である．反射成分と照明成分に分解する考え方をネットワーク構造に取り入れ，照明成分のみを強調することで自然な明るさの復元を目指すものである．",
    descriptionEn:
      "This work proposes a deep learning method for robust low-light image enhancement based on Retinex theory. It incorporates decomposition into reflectance and illumination components and enhances only the illumination component for natural restoration.",
    links: [],
    pdfUrl: "papers/国際会議/LLIE_ICIP_cr_1.pdf",
    previewImage: "assets/paper-previews/icip-wren.png"
  },
  "PHISWID: Physics-Inspired Underwater Image Dataset Synthesized from RGB-D Images": {
    descriptionJa:
      "水中画像復元の評価に使える合成データセットを，物理モデルに基づいて構築した研究である．水中では正解画像を得ることが難しいため，RGB-D画像から水中らしい劣化を再現し，学習・評価に使えるデータを作成したものである．",
    descriptionEn:
      "This work builds a physics-inspired synthetic dataset for underwater image restoration. Since ground-truth underwater images are difficult to obtain, underwater-like degradation is simulated from RGB-D images for training and evaluation.",
    links: [
      ["Publisher", "https://www.emerald.com/atsip/article/15/1/1/1346518/PHISWID-physics-inspired-underwater-image-data-set"],
      ["DOI", "https://doi.org/10.1108/ATSIP-02-2026-001"]
    ],
    pdfUrl: "papers/論文誌/atsip-02-2026-001en.pdf",
    previewImage: "assets/paper-previews/journal-phiswid.png"
  },
  "Unrolled denoising of attributes on graphs with local-and-global smoothness assumption": {
    descriptionJa:
      "グラフ上の属性信号に含まれるノイズを，局所的な滑らかさと大域的な滑らかさの両方を用いて除去する研究である．グラフ構造を活かした信号復元を，学習可能な展開型アルゴリズムとして設計したものである．",
    descriptionEn:
      "This work removes noise from graph attributes by combining local and global smoothness assumptions. It designs a learnable unrolled algorithm that uses graph structure for signal restoration.",
    links: [
      ["IEEE Xplore", "https://ieeexplore.ieee.org/document/11226630"]
    ],
    pdfUrl: "papers/国際会議/0002432.pdf",
    previewImage: "assets/paper-previews/eusipco-graph.png"
  },
  "Unrolled denoising of attributes on graphs with local-and-global smoothness assumption|Graph Signal Processing Workshop": {
    descriptionJa:
      "グラフ上の属性信号に含まれるノイズを，局所的な滑らかさと大域的な滑らかさの両方を用いて除去する研究である．グラフ構造を活かした信号復元を，学習可能な展開型アルゴリズムとして設計したものである．",
    descriptionEn:
      "This work removes noise from graph attributes by combining local and global smoothness assumptions. It designs a learnable unrolled algorithm that uses graph structure for signal restoration.",
    links: [],
    pdfUrl: "papers/国際会議/GSPWS_pointcloud.pdf",
    previewImage: "assets/paper-previews/gspws-pointcloud.png"
  },
  "Marine snow removal benchmarking dataset": {
    descriptionJa:
      "水中画像に写り込むマリンスノーを除去するためのベンチマークデータセットに関する研究である．水中画像の視認性を改善するため，除去手法を比較・評価できる基盤を整えたものである．",
    descriptionEn:
      "This work presents a benchmark dataset for removing marine snow from underwater images. It provides a basis for comparing restoration methods and improving underwater image visibility.",
    links: [
      ["IEEE Xplore", "https://ieeexplore.ieee.org/document/10317279"]
    ],
    pdfUrl: "papers/国際会議/APSIPA2023.pdf",
    previewImage: "assets/paper-previews/apsipa2023-marinesnow.png"
  },
  "LAPUTA：ユークリッド距離行列の修復を用いた分散型センサ位置推定": {
    descriptionJa:
      "センサ同士の距離情報からセンサ位置を推定する研究である．欠損やノイズを含む距離行列を修復しながら，センサネットワーク全体の位置を安定して求めることを目指すものである．",
    descriptionEn:
      "This work estimates sensor positions from pairwise distance information. It aims to robustly localize a sensor network by restoring Euclidean distance matrices with missing and noisy entries.",
    links: [],
    pdfUrl: "papers/国内学会/SNL_RCS.pdf",
    previewImage: "assets/paper-previews/domestic-laputa.png"
  },
  "Multiscale graph construction using non-local cluster features": {
    descriptionJa:
      "グラフ構造と頂点特徴量の両方を利用して，非局所的な類似性を反映したマルチスケールグラフを構築する研究である．離れた位置にあるが特徴が似ている領域をまとめることで，画像や点群の階層的な解析を目指すものである．",
    descriptionEn:
      "This work constructs multiscale graphs using both graph structure and node-wise features. It aims to capture non-local similarities for hierarchical analysis of images and point clouds.",
    links: [
      ["IEEE Xplore", "https://ieeexplore.ieee.org/document/10734767"]
    ],
    pdfUrl: "papers/国際会議/185.pdf",
    previewImage: "assets/paper-previews/mlsp-multiscale.png"
  },
  "Physics-inspired synthesized marine snow image dataset": {
    descriptionJa:
      "水中画像に現れるマリンスノーを物理的な考え方に基づいて合成し，除去手法の学習や評価に利用できるデータセットを構築した研究である．",
    descriptionEn:
      "This work synthesizes marine snow in underwater images based on physical insight and builds a dataset for training and evaluating removal methods.",
    links: [],
    pdfUrl: "papers/国際会議/ECCV_marinesnow_wicv.pdf",
    previewImage: "assets/paper-previews/eccv-marinesnow.png"
  },
  "Multiscale graph signal clustering": {
    descriptionJa:
      "グラフ構造と頂点特徴量の両方を利用して，非局所的な類似性を反映したマルチスケールグラフを構築する研究である．離れた位置にあるが特徴が似ている領域をまとめることで，画像や点群の階層的な解析を目指すものである．",
    descriptionEn:
      "This work constructs multiscale graphs using both graph structure and node-wise features. It aims to capture non-local similarities for hierarchical analysis of images and point clouds.",
    links: [],
    pdfUrl: "papers/国際会議/GSP_multi.pdf",
    previewImage: "assets/paper-previews/gsp-multiscale.png"
  },
  "局所的かつ大域的な平滑性仮定に基づくグラフ信号のノイズ除去": {
    descriptionJa:
      "グラフ上の属性信号に含まれるノイズを，局所的な滑らかさと大域的な滑らかさの両方を用いて除去する研究である．グラフ構造を活かした信号復元を，学習可能な展開型アルゴリズムとして設計したものである．",
    descriptionEn:
      "This work removes noise from graph attributes by combining local and global smoothness assumptions. It designs a learnable unrolled algorithm that uses graph structure for signal restoration.",
    links: [],
    pdfUrl: "papers/国内学会/Pointcloud_総合大会.pdf",
    previewImage: "assets/paper-previews/domestic-pointcloud.png"
  },
  "PHISWIDv2: より現実的な物理モデルに基づく合成水中画像データセット": {
    descriptionJa:
      "より現実的な物理モデルに基づいて，水中画像復元のための合成データセットを拡張した研究である．水中環境に近い劣化を再現することで，復元手法の評価をより信頼できるものにすることを目指すものである．",
    descriptionEn:
      "This work extends a synthetic underwater image dataset using a more realistic physical model to improve evaluation reliability for restoration methods.",
    links: [],
    pdfUrl: "papers/国内学会/SIP2025-135(PHISWIDv2_より現実的な物理モデルに基づく合成水中画像データセット).pdf",
    previewImage: "assets/paper-previews/domestic-phiswidv2.png"
  },
  "低照度動画像復元のための Retinex 理論に基づいた深層学習": {
    descriptionJa:
      "Retinex理論に基づき，低照度画像を安定して高品質に復元する深層学習手法を提案した研究である．反射成分と照明成分に分解する考え方をネットワーク構造に取り入れ，照明成分のみを強調することで自然な明るさの復元を目指すものである．",
    descriptionEn:
      "This work proposes a deep learning method for robust low-light image enhancement based on Retinex theory. It incorporates decomposition into reflectance and illumination components and enhances only the illumination component for natural restoration.",
    links: [],
    pdfUrl: "papers/国内学会/SIP2025-65(低照度画像復元のためのRetinex理論に基づいた深層学習).pdf",
    previewImage: "assets/paper-previews/domestic-llie.png"
  },
  "頂点特徴量を利用した非局所的マルチスケールグラフの構築": {
    descriptionJa:
      "グラフ構造と頂点特徴量の両方を利用して，非局所的な類似性を反映したマルチスケールグラフを構築する研究である．離れた位置にあるが特徴が似ている領域をまとめることで，画像や点群の階層的な解析を目指すものである．",
    descriptionEn:
      "This work constructs multiscale graphs using both graph structure and node-wise features. It aims to capture non-local similarities for hierarchical analysis of images and point clouds.",
    links: [],
    pdfUrl: "papers/国内学会/SIPS2024000046.pdf",
    previewImage: "assets/paper-previews/domestic-sips-multiscale.png"
  },
  "非局所的特徴を用いたマルチスケールグラフの構築": {
    descriptionJa:
      "グラフ構造と頂点特徴量の両方を利用して，非局所的な類似性を反映したマルチスケールグラフを構築する研究である．離れた位置にあるが特徴が似ている領域をまとめることで，画像や点群の階層的な解析を目指すものである．",
    descriptionEn:
      "This work constructs multiscale graphs using both graph structure and node-wise features. It aims to capture non-local similarities for hierarchical analysis of images and point clouds.",
    links: [],
    pdfUrl: "papers/国内学会/映像情報メディア学会_202408.pdf",
    previewImage: "assets/paper-previews/domestic-ite-multiscale.png"
  },
  "物理モデルに基づく水中画像生成": {
    descriptionJa:
      "水中で生じる光の吸収や散乱を考慮し，物理モデルに基づいて水中画像を生成する研究である．",
    descriptionEn:
      "This work generates underwater images based on a physical model of light absorption and scattering.",
    links: [],
    pdfUrl: "papers/国内学会/IE2023-142(物理モデルに基づく水中画像生成).pdf",
    previewImage: "assets/paper-previews/domestic-underwater.png"
  },
  "マリンスノー除去のためのデータセット": {
    descriptionJa:
      "マリンスノー除去手法を評価するためのデータセットを構築した研究である．水中画像の視認性改善に向けた比較基盤を整えたものである．",
    descriptionEn:
      "This work builds a dataset for evaluating marine snow removal methods and provides a benchmark for improving underwater image visibility.",
    links: [],
    pdfUrl: "papers/国内学会/SIPS2023000109.pdf",
    previewImage: "assets/paper-previews/domestic-marinesnow.png"
  }
};
const awardRecords = [
  {
    year: 2026,
    sort: "2026-03",
    titleJa: "信号処理研究会賞",
    titleEn: "IEICE Signal Processing Research Award",
    bodyJa: "電子情報通信学会 信号処理研究専門委員会",
    bodyEn: "IEICE Signal Processing Technical Committee"
  },
  {
    year: 2023,
    sort: "2023-12",
    titleJa: "信号処理若手奨励賞",
    titleEn: "IEICE Signal Processing Young Researcher Award",
    bodyJa: "電子情報通信学会 信号処理研究専門委員会",
    bodyEn: "IEICE Signal Processing Technical Committee"
  },
  {
    year: 2023,
    sort: "2023-12",
    titleJa: "IE賞",
    titleEn: "IE Award",
    bodyJa: "画像工学研究会",
    bodyEn: "Technical Committee on Image Engineering"
  },
  {
    year: 2023,
    sort: "2023-12",
    titleJa: "IE特別賞",
    titleEn: "IE Special Award",
    bodyJa: "画像工学研究会",
    bodyEn: "Technical Committee on Image Engineering"
  }
];
const publicationRecords = [
  {
    sort: "2026-09",
    authors: "R. Kaneko, J. Hara, H. Higashi, and Y. Tanaka",
    title: "WREN: Low light image enhancement using retinex theory-based double U-Net-like structures",
    venue: "IEEE International Conference on Image Processing, Tampere, Finland, Sep. 2026."
  },
  {
    sort: "2026-06",
    authors: "金子玲菜, 柳谷健太, 原惇也, 東広志, 田中雄一",
    title: "LAPUTA：ユークリッド距離行列の修復を用いた分散型センサ位置推定",
    venue: "電子情報通信学会無線通信システム研究会, 沖縄, 2026年6月."
  },
  {
    sort: "2026-03-2",
    authors: "R. Kaneko, T. Ueda, H. Higashi, and Y. Tanaka",
    title: "PHISWID: Physics-Inspired Underwater Image Dataset Synthesized from RGB-D Images",
    venue: "APSIPA Transactions on Signal and Information Processing, vol. 15, pp. 1-25, 2026."
  },
  {
    sort: "2026-03-1",
    authors: "金子玲菜, 原惇也, 東広志, 田中雄一",
    title: "局所的かつ大域的な平滑性仮定に基づくグラフ信号のノイズ除去",
    venue: "電子情報通信学会総合大会, 福岡, 2026年3月."
  },
  {
    sort: "2026-03-0",
    authors: "金子玲菜, 原惇也, 東広志, 田中雄一",
    title: "PHISWIDv2: より現実的な物理モデルに基づく合成水中画像データセット",
    venue: "電子情報通信学会信号処理研究会, pp. 253-258, 沖縄, 2026年3月."
  },
  {
    sort: "2026-01",
    authors: "金子玲菜, 原惇也, 東広志, 田中雄一",
    title: "低照度動画像復元のための Retinex 理論に基づいた深層学習",
    venue: "電子情報通信学会信号処理研究会, pp. 91-96, 宮城, 2026年1月."
  },
  {
    sort: "2025-09",
    authors: "R. Kaneko, J. Hara, H. Higashi, and Y. Tanaka",
    title: "Unrolled denoising of attributes on graphs with local-and-global smoothness assumption",
    venue: "The 33rd European Signal Processing Conference, pp. 2432-2436, Palermo, Italy, Sep. 2025."
  },
  {
    sort: "2025-05",
    authors: "R. Kaneko, J. Hara, H. Higashi, and Y. Tanaka",
    title: "Unrolled denoising of attributes on graphs with local-and-global smoothness assumption",
    venue: "Graph Signal Processing Workshop, Montreal, Canada, May 2025."
  },
  {
    sort: "2024-12",
    authors: "金子玲菜, 原惇也, 柳谷健太, 小島颯, 東広志, 田中雄一",
    title: "頂点特徴量を利用した非局所的マルチスケールグラフの構築",
    venue: "第39回信号処理シンポジウム, 北海道, 2024年12月."
  },
  {
    sort: "2024-11",
    authors: "金子玲菜",
    title: "水中画像修復のためのデータセット作成",
    venue: "2024年度動画像符号化シンポジウム/2024年度映像メディア処理シンポジウム, 静岡, 2024年11月."
  },
  {
    sort: "2024-09-2",
    authors: "R. Kaneko, H. Kojima, K. Yanagiya, J. Hara, H. Higashi, and Y. Tanaka",
    title: "Multiscale graph construction using non-local cluster features",
    venue: "IEEE International Workshop on Machine Learning for Signal Processing, pp. 1-6, London, UK, Sep. 2024."
  },
  {
    sort: "2024-09-1",
    authors: "R. Kaneko, H. Higashi, and Y. Tanaka",
    title: "Physics-inspired synthesized marine snow image dataset",
    venue: "European Conference on Computer Vision Workshops, Milan, Italy, Sep. 2024."
  },
  {
    sort: "2024-08",
    authors: "金子玲菜, 原惇也, 柳谷健太, 小島颯, 東広志, 田中雄一",
    title: "非局所的特徴を用いたマルチスケールグラフの構築",
    venue: "電子情報通信学会映像情報メディア学会年次大会, 北海道, 2024年8月."
  },
  {
    sort: "2024-06",
    authors: "R. Kaneko, J. Hara, K. Yanagiya, H. Higashi, and Y. Tanaka",
    title: "Multiscale graph signal clustering",
    venue: "Graph Signal Processing Workshop, Delft, Netherlands, Jun. 2024."
  },
  {
    sort: "2024-03",
    authors: "金子玲菜, 東広志, 田中雄一",
    title: "物理モデルに基づく水中画像生成",
    venue: "電子情報通信学会画像工学研究会, pp. 396-401, 沖縄, 2024年3月."
  },
  {
    sort: "2023-11-2",
    authors: "R. Kaneko, Y. Sato, T. Ueda, H. Higashi, and Y. Tanaka",
    title: "Marine snow removal benchmarking dataset",
    venue: "Asia Pacific Signal and Information Processing Association Annual Summit and Conference, pp. 771-778, Taipei, Taiwan, Nov. 2023."
  },
  {
    sort: "2023-11-1",
    authors: "金子玲菜, 佐藤祐哉, 上田拓実, 東広志, 田中雄一",
    title: "マリンスノー除去のためのデータセット",
    venue: "第38回信号処理シンポジウム, 京都, 2023年11月."
  }
];

function setLanguage(language) {
  document.documentElement.lang = language;
  localStorage.setItem("siteLanguage", language);

  document.querySelectorAll("[data-ja][data-en]").forEach((element) => {
    element.innerHTML = element.dataset[language];
  });

  switchButtons.forEach((button) => {
    const isActive = button.dataset.langSwitch === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

const savedLanguage = localStorage.getItem("siteLanguage") || "ja";

function sortDescending(records) {
  return [...records].sort((a, b) => String(b.sort).localeCompare(String(a.sort)));
}

function renderAwardList(container, limit) {
  if (!container) return;
  container.innerHTML = "";
  const shownLimit = limit || awardRecords.length;
  sortDescending(awardRecords).slice(0, shownLimit).forEach((award) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <time>${award.year}</time>
      <div>
        <h3 data-ja="${award.titleJa}" data-en="${award.titleEn}">${award.titleJa}</h3>
        <p data-ja="${award.bodyJa}" data-en="${award.bodyEn}">${award.bodyJa}</p>
      </div>
    `;
    container.appendChild(item);
  });
  if (container.id === "homeAwardList") {
    renderMoreCount(document.querySelector("#homeAwardMore"), awardRecords.length - shownLimit);
  }
}

function renderHomePublications(container, limit) {
  if (!container) return;
  container.innerHTML = "";
  const shownLimit = limit || 3;
  sortDescending(publicationRecords).slice(0, shownLimit).forEach((paper) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${paper.authors}</strong>, “${paper.title},” ${paper.venue}`;
    container.appendChild(item);
  });
  renderMoreCount(document.querySelector("#homePublicationMore"), countPublicationItems() - shownLimit);
}

function countPublicationItems() {
  const pageCount = [...document.querySelectorAll(".publication-group")]
    .reduce((total, group) => total + group.querySelectorAll(".full-publication-list li").length, 0);
  return pageCount || publicationRecords.length;
}

function renderMoreCount(container, count) {
  if (!container) return;
  if (count > 0) {
    container.dataset.ja = `他${count}件`;
    container.dataset.en = `${count} more`;
    container.textContent = document.documentElement.lang === "en" ? container.dataset.en : container.dataset.ja;
  } else {
    container.removeAttribute("data-ja");
    container.removeAttribute("data-en");
    container.textContent = "";
  }
}

function renderDynamicContent() {
  const homeAwardList = document.querySelector("#homeAwardList");
  renderAwardList(homeAwardList, Number(homeAwardList?.dataset.awardLimit || 2));
  renderAwardList(document.querySelector("#fullAwardList"));

  const homePublicationList = document.querySelector("#homePublicationList");
  renderHomePublications(homePublicationList, Number(homePublicationList?.dataset.publicationLimit || 3));
}

switchButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.langSwitch);
  });
});

renderDynamicContent();
setLanguage(savedLanguage);

const paperDialog = document.querySelector("#paperDialog");
const paperClose = document.querySelector(".paper-close");

function normalizeText(text) {
  return text.replace(/[📕📘📗]/g, "").replace(/\s+/g, " ").trim();
}

function getPublicationData(item, group) {
  const raw = normalizeText(item.innerText);
  const titleMatch = raw.match(/[“"](.*?)[,”"]/);
  const title = titleMatch ? titleMatch[1] : raw;
  const beforeTitle = titleMatch ? raw.slice(0, titleMatch.index).replace(/,$/, "").trim() : "";
  const afterTitle = titleMatch ? raw.slice(titleMatch.index + titleMatch[0].length).replace(/^,?\s*/, "") : "";
  const categoryJa = group.querySelector("h2")?.dataset.ja || "論文";
  const categoryEn = group.querySelector("h2")?.dataset.en || "Publication";
  const detail = paperDetails[`${title}|Graph Signal Processing Workshop`] && afterTitle.includes("Graph Signal Processing Workshop")
    ? paperDetails[`${title}|Graph Signal Processing Workshop`]
    : paperDetails[title] || {};

  return {
    title,
    authors: beforeTitle,
    venue: afterTitle,
    categoryJa,
    categoryEn,
    descriptionJa:
      detail.descriptionJa ||
      "この業績は，信号処理・画像処理・数理最適化を基盤として実問題に取り組んだ研究である．詳細説明は今後追加予定である．",
    descriptionEn:
      detail.descriptionEn ||
      "This work addresses a practical problem based on signal processing, image processing, or mathematical optimization. A detailed note will be added later.",
    links: detail.links || [],
    pdfUrl: detail.pdfUrl || "",
    previewImage: detail.previewImage || "",
    bookClass: bookClassForGroup(group)
  };
}

function bookClassForGroup(group) {
  const label = group.querySelector("h2")?.dataset.en || "";
  if (label.includes("International")) return "paper-blue";
  if (label.includes("Domestic")) return "paper-green";
  return "paper-red";
}

function bookIconForGroup(group) {
  const label = group.querySelector("h2")?.dataset.en || "";
  if (label.includes("International")) return "📘";
  if (label.includes("Domestic")) return "📗";
  return "📕";
}

function publicationIllustrationFor(data) {
  const venue = data.venue;
  const category = data.categoryEn;
  if (category.includes("Journal")) return "assets/publication-locations/journal-book.png";
  if (/Tampere/i.test(venue)) return "assets/publication-locations/tampere.png";
  if (/Palermo/i.test(venue)) return "assets/publication-locations/palermo.png";
  if (/Milan/i.test(venue)) return "assets/publication-locations/milan.png";
  if (/Montreal/i.test(venue)) return "assets/publication-locations/montreal.png";
  if (/London/i.test(venue)) return "assets/publication-locations/london.png";
  if (/Delft/i.test(venue)) return "assets/publication-locations/delft.png";
  if (/Taipei/i.test(venue)) return "assets/publication-locations/taipei.png";
  if (/沖縄|Okinawa/i.test(venue)) return "assets/publication-locations/okinawa.png";
  if (/福岡|Fukuoka/i.test(venue)) return "assets/publication-locations/fukuoka.png";
  if (/宮城|Miyagi/i.test(venue)) return "assets/publication-locations/miyagi.png";
  if (/北海道|Hokkaido/i.test(venue)) return "assets/publication-locations/hokkaido.png";
  if (/京都|Kyoto/i.test(venue)) return "assets/publication-locations/kyoto.png";
  if (/静岡|Shizuoka/i.test(venue)) return "assets/publication-locations/shizuoka.png";
  return "";
}

function publicationFlagFor(data) {
  const venue = data.venue;
  if (/Tampere/i.test(venue)) return "🇫🇮";
  if (/Palermo|Milan/i.test(venue)) return "🇮🇹";
  if (/Montreal/i.test(venue)) return "🇨🇦";
  if (/London/i.test(venue)) return "🇬🇧";
  if (/Delft/i.test(venue)) return "🇳🇱";
  if (/Taipei/i.test(venue)) return "🇹🇼";
  return "";
}

function addPublicationIllustration(item, data) {
  const imageUrl = publicationIllustrationFor(data);
  if (!imageUrl) {
    item.classList.add("publication-no-art");
    return;
  }
  const imageWrap = document.createElement("span");
  imageWrap.className = "publication-location-art";
  imageWrap.setAttribute("aria-hidden", "true");
  const flag = publicationFlagFor(data);
  imageWrap.innerHTML = `<img src="${imageUrl}" alt="">${flag ? `<span class="publication-flag">${flag}</span>` : ""}`;
  item.prepend(imageWrap);
}

function wrapPublicationContent(item) {
  if (item.querySelector(".publication-entry")) return;
  const entry = document.createElement("span");
  entry.className = "publication-entry";
  while (item.firstChild) {
    entry.appendChild(item.firstChild);
  }
  item.appendChild(entry);
}

function openPaperDialog(data) {
  const language = document.documentElement.lang === "en" ? "en" : "ja";
  document.querySelector(".book-open")?.classList.remove("paper-red", "paper-blue", "paper-green");
  document.querySelector(".book-open")?.classList.add(data.bookClass);
  document.querySelector("#paperDialogCategory").textContent = language === "ja" ? data.categoryJa : data.categoryEn;
  document.querySelector("#paperDialogTitle").textContent = data.title;
  document.querySelector("#paperAuthorsLabel").textContent = language === "ja" ? "著者" : "Authors";
  document.querySelector("#paperVenueLabel").textContent =
    data.categoryEn === "Journal Papers" ? (language === "ja" ? "出版" : "Publication") : (language === "ja" ? "会議" : "Conference");
  document.querySelector("#paperDialogAuthors").textContent = data.authors;
  document.querySelector("#paperDialogVenue").textContent = data.venue;
  document.querySelector("#paperDialogDescription").textContent = language === "ja" ? data.descriptionJa : data.descriptionEn;

  const preview = document.querySelector("#paperPreview");
  if (data.previewImage) {
    preview.innerHTML = `<img src="${data.previewImage}" alt="${data.title} first page preview">`;
  } else {
    preview.innerHTML = `<div class="paper-preview-placeholder"><strong>${data.title}</strong><span>${language === "ja"
      ? "この研究の概要を左ページにまとめている．"
      : "A short summary of this work is shown on the left page."
      }</span></div>`;
  }

  const actions = document.querySelector("#paperActions");
  actions.innerHTML = "";
  data.links.forEach(([label, url]) => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = label;
    actions.appendChild(link);
  });
  if (!data.categoryEn.includes("Domestic")) {
    const searchLink = document.createElement("a");
    searchLink.href = `https://scholar.google.com/scholar?q=${encodeURIComponent(data.title)}`;
    searchLink.target = "_blank";
    searchLink.rel = "noopener";
    searchLink.textContent = "Google Scholar";
    actions.appendChild(searchLink);
  }
  if (/IEEE/i.test(data.venue) && !data.links.some(([label]) => label === "IEEE Xplore")) {
    const ieeeLink = document.createElement("a");
    ieeeLink.href = `https://ieeexplore.ieee.org/search/searchresult.jsp?queryText=${encodeURIComponent(data.title)}`;
    ieeeLink.target = "_blank";
    ieeeLink.rel = "noopener";
    ieeeLink.textContent = "IEEE Xplore";
    actions.appendChild(ieeeLink);
  }

  paperDialog?.showModal();
}

document.querySelectorAll(".publication-group").forEach((group) => {
  group.querySelectorAll(".full-publication-list li").forEach((item) => {
    const data = getPublicationData(item, group);
    wrapPublicationContent(item);
    addPublicationIllustration(item, data);
    if ((group.querySelector("h2")?.dataset.en || "").includes("Invited")) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = `publication-detail-button ${bookClassForGroup(group)}`;
    button.textContent = bookIconForGroup(group);
    button.setAttribute("aria-label", "Open publication details");
    button.addEventListener("click", () => openPaperDialog(getPublicationData(item, group)));
    item.appendChild(button);
  });
});

paperClose?.addEventListener("click", () => paperDialog.close());
paperDialog?.addEventListener("click", (event) => {
  if (event.target === paperDialog) paperDialog.close();
});
