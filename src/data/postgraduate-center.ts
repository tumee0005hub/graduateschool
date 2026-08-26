import type { Locale } from "@/lib/i18n";

type LocalizedText = Record<Locale, string>;

export interface SpecializationItem {
  name: LocalizedText;
  duration: LocalizedText;
}

export interface SpecializationGroup {
  title: LocalizedText;
  items: SpecializationItem[];
}

export const basicSpecializations: SpecializationGroup[] = [
  {
    title: {
      mn: "Хүний их эмч элсэн суралцах боломжтой мэргэшлийн чиглэлүүд:",
      en: "Specializations available for Medical Doctors:",
    },
    items: [
      {
        name: { mn: "Нүд судлал", en: "Ophthalmology" },
        duration: { mn: "3 жил", en: "3 years" },
      },
      {
        name: { mn: "Анатомийн эмгэг судлал", en: "Anatomical Pathology" },
        duration: { mn: "2 жил", en: "2 years" },
      },
      {
        name: { mn: "Гэмтэл согог судлал", en: "Traumatology" },
        duration: { mn: "2 жил", en: "2 years" },
      },
      {
        name: { mn: "Дотрын анагаах судлал", en: "Internal Medicine" },
        duration: { mn: "2 жил", en: "2 years" },
      },
      {
        name: { mn: "Мэдрэл судлал", en: "Neurology" },
        duration: { mn: "2 жил", en: "2 years" },
      },
      {
        name: { mn: "Мэдээгүйжүүлэг судлал", en: "Anesthesiology" },
        duration: { mn: "2 жил", en: "2 years" },
      },
      {
        name: { mn: "Өрхийн анагаах ухаан судлал", en: "Family Medicine" },
        duration: { mn: "2 жил", en: "2 years" },
      },
      {
        name: { mn: "Сэтгэц судлал", en: "Psychiatry" },
        duration: { mn: "2 жил", en: "2 years" },
      },
      {
        name: { mn: "Хавдар судлал", en: "Oncology" },
        duration: { mn: "2 жил", en: "2 years" },
      },
      {
        name: { mn: "Халдварт өвчин судлал", en: "Infectious Diseases" },
        duration: { mn: "2 жил", en: "2 years" },
      },
      {
        name: { mn: "Хүүхэд судлал", en: "Pediatrics" },
        duration: { mn: "2 жил", en: "2 years" },
      },
      {
        name: { mn: "Чих хамар хоолой судлал", en: "Otorhinolaryngology" },
        duration: { mn: "2 жил", en: "2 years" },
      },
      {
        name: { mn: "Шүүхийн анагаах ухаан судлал", en: "Forensic Medicine" },
        duration: { mn: "2 жил", en: "2 years" },
      },
      {
        name: { mn: "Эмнэлзүйн эмгэг судлал", en: "Clinical Pathology" },
        duration: { mn: "2 жил", en: "2 years" },
      },
      {
        name: { mn: "Эрчимт эмчилгээ судлал", en: "Intensive Care Medicine" },
        duration: { mn: "2 жил", en: "2 years" },
      },
      {
        name: {
          mn: "Эх барих, эмэгтэйчүүдийн судлал",
          en: "Obstetrics & Gynecology",
        },
        duration: { mn: "2 жил", en: "2 years" },
      },
      {
        name: { mn: "Яаралтай тусламж судлал", en: "Emergency Medicine" },
        duration: { mn: "2 жил", en: "2 years" },
      },
      {
        name: { mn: "Сэргээн засах судлал", en: "Rehabilitation Medicine" },
        duration: { mn: "2 жил", en: "2 years" },
      },
    ],
  },
  {
    title: {
      mn: "Уламжлалт анагаах ухааны их эмч элсэн суралцах боломжтой мэргэшлийн чиглэлүүд:",
      en: "Specializations available for Traditional Medicine Doctors:",
    },
    items: [
      {
        name: {
          mn: "Монголын уламжлалт, анагаах ухаан, зүү эмчилгээ судлал",
          en: "Mongolian Traditional Medicine, Acupuncture",
        },
        duration: { mn: "2 жил", en: "2 years" },
      },      
    ],
  },
  {
    title: {
      mn: "Шүдний их эмч элсэн суралцах боломжтой мэргэшлийн чиглэлүүд:",
      en: "Specializations available for Dental Doctors:",
    },
    items: [
      {
        name: { mn: "Нүүр амны гажиг засал судлал", en: "Orthodontics" },
        duration: { mn: "2 жил", en: "2 years" },
      },
      {
        name: { mn: "Нүүр амны согог засал судлал", en: "Prosthodontics" },
        duration: { mn: "2 жил", en: "2 years" },
      },
      {
        name: {
          mn: "Нүүр амны мэс засал судлал",
          en: "Oral & Maxillofacial Surgery",
        },
        duration: { mn: "2 жил", en: "2 years" },
      },
      {
        name: { mn: "Шүдний тулгуур эд судлал", en: "Periodontics" },
        duration: { mn: "2 жил", en: "2 years" },
      },
      {
        name: { mn: "Шүдний сувгийн эмчилгээ судлал", en: "Endodontics" },
        duration: { mn: "2 жил", en: "2 years" },
      },
      {
        name: { mn: "Шүдний ерөнхий эмчилгээ судлал", en: "General Dentistry" },
        duration: { mn: "2 жил", en: "2 years" },
      },
      {
        name: { mn: "Хүүхдийн нүүр ам судлал", en: "Pediatric Dentistry" },
        duration: { mn: "2 жил", en: "2 years" },
      },
    ],
  },
];

/* ── Төрөлжсөн мэргэшлийн сургалт ── */

export interface SubspecializationRow {
  name: LocalizedText;
  nameEn: string;
  eligibility: LocalizedText;
  duration: string; // e.g. "6 сар"
  credits: number; // e.g. 26
  tuition: number; // e.g. 416000
}

export interface SubspecializationGroup {
  parent: LocalizedText;
  rows: SubspecializationRow[];
}

export const subspecializations: SubspecializationGroup[] = [
  {
    parent: { mn: "Анатомийн эмгэг судлал", en: "Anatomical Pathology" },
    rows: [
      {
        name: { mn: "Эсийн эмгэг судлал", en: "Cytopathology" },
        nameEn: "Cytopathology",
        eligibility: {
          mn: "Анатомийн эмгэг судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Anatomical Pathology",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "Хүүхдийн эмгэг судлал", en: "Pediatric Pathology" },
        nameEn: "Pediatric Pathology",
        eligibility: {
          mn: "Анатомийн эмгэг судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Anatomical Pathology",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "Арьсны эмгэг судлал", en: "Dermatopathology" },
        nameEn: "Dermatopathology",
        eligibility: {
          mn: "Анатомийн эмгэг судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч; Арьс судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Anatomical Pathology or Dermatology",
        },
        duration: "12 сар",
        credits: 46,
        tuition: 736000,
      },
    ],
  },
  {
    parent: { mn: "Арьс судлал", en: "Dermatology" },
    rows: [
      {
        name: { mn: "Хүүхдийн арьс судлал", en: "Pediatric Dermatology" },
        nameEn: "Pediatric Dermatology",
        eligibility: {
          mn: "Арьс судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч; Хүүхэд судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Dermatology or Pediatrics",
        },
        duration: "12 сар",
        credits: 46,
        tuition: 736000,
      },
      {
        name: { mn: "Арьсны мэс засал судлал", en: "Dermatosurgery" },
        nameEn: "Dermatosurgery",
        eligibility: {
          mn: "Арьс судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Dermatology",
        },
        duration: "12 сар",
        credits: 46,
        tuition: 736000,
      },
    ],
  },
  {
    parent: { mn: "Гэмтэл согог судлал", en: "Traumatology" },
    rows: [
      {
        name: {
          mn: "Яс, үений мэс засал судлал",
          en: "Bone and Joint Surgery",
        },
        nameEn: "Bone and Joint Surgery",
        eligibility: {
          mn: "Гэмтэл согог судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Traumatology",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
    ],
  },
  {
    parent: { mn: "Дотрын анагаах судлал", en: "Internal Medicine" },
    rows: [
      {
        name: { mn: "Зүрх судлал", en: "Cardiology" },
        nameEn: "Cardiology",
        eligibility: {
          mn: "Дотор судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Internal Medicine",
        },
        duration: "12 сар",
        credits: 60,
        tuition: 960000,
      },
      {
        name: { mn: "Ревматологи", en: "Rheumatology" },
        nameEn: "Rheumatology",
        eligibility: {
          mn: "Дотор судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Internal Medicine",
        },
        duration: "12 сар",
        credits: 46,
        tuition: 736000,
      },
      {
        name: { mn: "Уушги судлал", en: "Pulmonology" },
        nameEn: "Pulmonology",
        eligibility: {
          mn: "Дотор судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Internal Medicine",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "Бөөр судлал", en: "Nephrology" },
        nameEn: "Nephrology",
        eligibility: {
          mn: "Дотор судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Internal Medicine",
        },
        duration: "12 сар",
        credits: 46,
        tuition: 736000,
      },
      {
        name: {
          mn: "Хоол боловсруулах тогтолцоо судлал",
          en: "Gastroenterology",
        },
        nameEn: "Gastroenterology",
        eligibility: {
          mn: "Дотор судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Internal Medicine",
        },
        duration: "12 сар",
        credits: 46,
        tuition: 736000,
      },
      {
        name: { mn: "Цус судлал", en: "Hematology" },
        nameEn: "Hematology",
        eligibility: {
          mn: "Дотор судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Internal Medicine",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "Дотоод шүүрэл судлал", en: "Endocrinology" },
        nameEn: "Endocrinology",
        eligibility: {
          mn: "Дотор судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Internal Medicine",
        },
        duration: "12 сар",
        credits: 46,
        tuition: 736000,
      },
      {
        name: { mn: "Хөнгөвчлөх эмчилгээ судлал", en: "Palliative Medicine" },
        nameEn: "Palliative Medicine",
        eligibility: {
          mn: "Дотрын анагаах судлал, Гэмтэл согог судлал, Арьс судлал, Ерөнхий мэргэшил судлал, Мэдрэл судлал, Мэдээгүйжүүлэг судлал, Мэс засал судлал, Нүд судлал, Өрхийн анагаах ухаан судлал, Сүрьеэ судлал, Сэтгэц судлал, Хавдар судлал, Халдварт өвчин судлал, Хүүхэд судлал, ЧХХ судлал, Эрчимт эмчилгээ судлал, Эх барих эмэгтэйчүүд судлал, Яаралтай тусламж судлал зэргийн аль нэгээр үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in any clinical field",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "Настан судлал", en: "Geriatric Medicine" },
        nameEn: "Geriatric Medicine",
        eligibility: {
          mn: "Дотор судлал, Ерөнхий мэргэшил судлал, Мэдрэл судлал, Өрхийн анагаах судлал, Сэргээн засал судлал, Сэтгэц судлал зэргийн аль нэгээр үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Internal Medicine, General Practice, Neurology, Family Medicine, Rehabilitation, or Psychiatry",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "Эмнэлзүйн эм судлал", en: "Clinical Pharmacology" },
        nameEn: "Clinical pharmacology",
        eligibility: {
          mn: "Дотрын анагаах судлал, Гэмтэл согог судлал, Арьс судлал, Ерөнхий мэргэшил судлал, Мэдрэл судлал, Мэдээгүйжүүлэг судлал, Мэс засал судлал, Нүд судлал, Өрхийн анагаах ухаан судлал, Сүрьеэ судлал, Сэтгэц судлал, Хавдар судлал, Халдварт өвчин судлал, Хүүхэд судлал, ЧХХ судлал, Эрчимт эмчилгээ судлал, Эх барих эмэгтэйчүүд судлал, Яаралтай тусламж судлал зэргийн аль нэгээр үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in any clinical field",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "Эмнэл зүйн харшил судлал", en: "Clinical Allergy" },
        nameEn: "Clinical Allergy",
        eligibility: {
          mn: "Дотрын анагаах судлал, Арьс судлал, Нүд судлал, Хүүхэд судлал, ЧХХ судлал, Өрхийн анагаах ухаан зэргийн аль нэгээр үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Internal Medicine, Dermatology, Ophthalmology, Pediatrics, ENT, or Family Medicine",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
    ],
  },
  {
    parent: { mn: "Дүрс оношлогоо судлал", en: "Diagnostic Imaging" },
    rows: [
      {
        name: {
          mn: "Ангиографи/ Судсан дотуурх оношлогоо эмчилгээ судлал",
          en: "Angiography/Interventional Radiology",
        },
        nameEn: "Angiography/lnterventional Radiology",
        eligibility: {
          mn: "Дүрс оношилгоо судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Diagnostic Imaging",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: {
          mn: "Мэдрэл, толгой, хүзүүний дүрс оношилгоо судлал",
          en: "Neuro, Head-Neck Radiology",
        },
        nameEn: "Neuro, Head-Neck Radiology",
        eligibility: {
          mn: "Дүрс оношилгоо судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Diagnostic Imaging",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "Хөхний дүрс оношилгоо судлал", en: "Breast Radiology" },
        nameEn: "Breast Radiology",
        eligibility: {
          mn: "Дүрс оношилгоо судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Diagnostic Imaging",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
    ],
  },
  {
    parent: { mn: "Мэдрэл судлал", en: "Neurology" },
    rows: [
      {
        name: { mn: "Хүүхдийн мэдрэл судлал", en: "Pediatric Neurology" },
        nameEn: "Pediatric Neurology",
        eligibility: {
          mn: "Мэдрэл судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч; Хүүхэд судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Neurology or Pediatrics",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
    ],
  },
  {
    parent: { mn: "Мэдээгүйжүүлэг судлал", en: "Anesthesiology" },
    rows: [
      {
        name: {
          mn: "Хүүхдийн мэдээгүйжүүлэг судлал",
          en: "Pediatric Anesthesiology",
        },
        nameEn: "Pediatric Anesthesiology",
        eligibility: {
          mn: "Хүүхэд судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч; Мэдээгүйжүүлэг судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Pediatrics or Anesthesiology",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
    ],
  },
  {
    parent: { mn: "Мэс засал судлал", en: "Surgery" },
    rows: [
      {
        name: { mn: "Бөөрний мэс засал судлал", en: "Urological Surgery" },
        nameEn: "Urological Surgery",
        eligibility: {
          mn: "Мэс засал судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Surgery",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: {
          mn: "Бүдүүн шулуун гэдэсний мэс засал судлал",
          en: "Colorectal Surgery",
        },
        nameEn: "Colorectal Surgery",
        eligibility: {
          mn: "Мэс засал судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Surgery",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: {
          mn: "Эрэгтэйчүүдийн нөхөн үржихүйн эрүүл мэнд, мэс засал судлал",
          en: "Male Reproductive Medicine and Surgery",
        },
        nameEn: "Male Reproductive Medicine and Surgery",
        eligibility: {
          mn: "Бөөрний мэс засал судлалаар төрөлжсөн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with subspecialization in Urological Surgery",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "Хүүхдийн мэс засал судлал", en: "Pediatric Surgery" },
        nameEn: "Pediatric Surgery",
        eligibility: {
          mn: "Мэс засал судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Surgery",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "Мэдрэлийн мэс засал судлал", en: "Neurological Surgery" },
        nameEn: "Neurological Surgery",
        eligibility: {
          mn: "Мэс засал судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч; Гэмтэл согог судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Surgery or Traumatology",
        },
        duration: "12 сар",
        credits: 46,
        tuition: 736000,
      },
      {
        name: { mn: "Хэвлийн мэс засал судлал", en: "Visceral Surgery" },
        nameEn: "Visceral Surgery",
        eligibility: {
          mn: "Мэс засал судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Surgery",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "Цээжний мэс засал судлал", en: "Thoracic Surgery" },
        nameEn: "Thoracic Surgery",
        eligibility: {
          mn: "Мэс засал судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Surgery",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: {
          mn: "Дотоод шүүрлийн мэс засал судлал",
          en: "Endocrine Surgery",
        },
        nameEn: "Endocrine Surgery",
        eligibility: {
          mn: "Мэс засал судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Surgery",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
    ],
  },
  {
    parent: { mn: "Сэтгэц судлал", en: "Psychiatry" },
    rows: [
      {
        name: { mn: "Сэтгэл засал судлал", en: "Psychotherapy" },
        nameEn: "Psychotherapy",
        eligibility: {
          mn: "Сэтгэц судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Psychiatry",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "Донтолт судлал", en: "Addiction Psychiatry" },
        nameEn: "Addiction Psychiatry",
        eligibility: {
          mn: "Сэтгэц судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Psychiatry",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
    ],
  },
  {
    parent: { mn: "Хавдар судлал", en: "Oncology" },
    rows: [
      {
        name: { mn: "Хавдрын хими эмчилгээ судлал", en: "Chemotherapy" },
        nameEn: "Chemotherapy",
        eligibility: {
          mn: "Хавдар судлалын үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Oncology",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "Хавдрын туяа эмчилгээ", en: "Radiotherapy" },
        nameEn: "Radiotherapy",
        eligibility: {
          mn: "Хавдар судлалын үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Oncology",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
    ],
  },
  {
    parent: { mn: "Халдварт өвчин судлал", en: "Infectious Diseases" },
    rows: [
      {
        name: {
          mn: "Хүүхдийн халдварт өвчин судлал",
          en: "Pediatric Infectious Disease",
        },
        nameEn: "Pediatric Infectious Disease",
        eligibility: {
          mn: "Халдварт өвчин судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч; Хүүхэд судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Infectious Diseases or Pediatrics",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "БЗДХ, ХДХВ/ДОХ", en: "STI and HIV/AIDS" },
        nameEn: "Sexually Transmitted Infection and HIV/AIDS",
        eligibility: {
          mn: "Халдварт өвчин судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч; Арьс судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Infectious Diseases or Dermatology",
        },
        duration: "12 сар",
        credits: 46,
        tuition: 736000,
      },
    ],
  },
  {
    parent: { mn: "Хүүхэд судлал", en: "Pediatrics" },
    rows: [
      {
        name: {
          mn: "Нярай, перинатал судлал",
          en: "Neonatal-Perinatal Medicine",
        },
        nameEn: "Neonatal-Perinatal Medicine",
        eligibility: {
          mn: "Хүүхэд судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Pediatrics",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "Өсвөр үе судлал", en: "Adolescent Medicine" },
        nameEn: "Adolescent Medicine",
        eligibility: {
          mn: "Хүүхэд судлал, Дотор судлал, Өрх судлал зэргийн аль нэгээр үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Pediatrics, Internal Medicine, or Family Medicine",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "Хүүхдийн зүрх судлал", en: "Pediatric Cardiology" },
        nameEn: "Pediatric Cardiology",
        eligibility: {
          mn: "Хүүхэд судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Pediatrics",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "Хүүхдийн уушги судлал", en: "Pediatric Pulmonology" },
        nameEn: "Pediatric Pulmonology",
        eligibility: {
          mn: "Хүүхэд судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Pediatrics",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "Хүүхдийн бөөр судлал", en: "Pediatric Nephrology" },
        nameEn: "Pediatric Nephrology",
        eligibility: {
          mn: "Хүүхэд судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Pediatrics",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: {
          mn: "Хүүхдийн хоол боловсруулах тогтолцоо судлал",
          en: "Pediatric Gastroenterology",
        },
        nameEn: "Pediatric Gastroenterology",
        eligibility: {
          mn: "Хүүхэд судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Pediatrics",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: {
          mn: "Хүүхдийн дотоод шүүрэл судлал",
          en: "Pediatric Endocrinology",
        },
        nameEn: "Pediatric Endocrinology",
        eligibility: {
          mn: "Хүүхэд судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Pediatrics",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "Хүүхдийн ревматологи", en: "Pediatric Rheumatology" },
        nameEn: "Pediatric Rheumatology",
        eligibility: {
          mn: "Хүүхэд судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Pediatrics",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
    ],
  },
  {
    parent: { mn: "Чих хамар хоолой судлал", en: "Otorhinolaryngology" },
    rows: [
      {
        name: {
          mn: "Хүүхдийн чих хамар хоолой судлал",
          en: "Pediatric Otorhinolaryngology",
        },
        nameEn: "Pediatric Otorhinolaryngology",
        eligibility: {
          mn: "Чих, хамар, хоолой судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in ENT",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "Чих хамар хоолойн мэс засал судлал", en: "ENT Surgery" },
        nameEn: "Ear Nose and Throat Surgery",
        eligibility: {
          mn: "Чих, хамар, хоолой судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in ENT",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: {
          mn: "Сонсгол-тэнцвэр судлал",
          en: "Audiology and Vestibular Diagnostics",
        },
        nameEn: "Audiologist and Vestibular Diagnostics Specialist",
        eligibility: {
          mn: "Чих, хамар, хоолой судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in ENT",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
    ],
  },
  {
    parent: { mn: "Эмнэлзүйн эмгэг судлал", en: "Clinical Pathology" },
    rows: [
      {
        name: { mn: "Эмнэл зүйн дархлаа судлал", en: "Clinical Immunology" },
        nameEn: "Clinical Immunology",
        eligibility: {
          mn: "Эмнэл зүйн эмгэг судлал, Арьс судлал, Дотор судлал, Нүд судлал, Хүүхэд судлал, ЧХХ судлал, Халдварт өвчин судлал зэргийн аль нэгээр үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Clinical Pathology, Dermatology, Internal Medicine, Ophthalmology, Pediatrics, ENT, or Infectious Diseases",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: {
          mn: "Эмнэл зүйн бичил амь судлал",
          en: "Clinical Microbiology",
        },
        nameEn: "Clinical Microbiology",
        eligibility: {
          mn: "Эмнэл зүйн эмгэг судлал, Зоонозын өвчин судлал, Халдварт өвчин судлал зэргийн аль нэгээр үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Clinical Pathology, Zoonotic Diseases, or Infectious Diseases",
        },
        duration: "12 сар",
        credits: 46,
        tuition: 736000,
      },
      {
        name: { mn: "Эмнэл зүйн удам зүй судлал", en: "Clinical Genetics" },
        nameEn: "Clinical Genetics",
        eligibility: {
          mn: "Эмнэл зүйн эмгэг судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Clinical Pathology",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "Эмнэл зүйн хими судлал", en: "Clinical Chemistry" },
        nameEn: "Clinical Chemistry",
        eligibility: {
          mn: "Эмнэл зүйн эмгэг судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Clinical Pathology",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: {
          mn: "Эмнэл зүйн лабораторийн цус судлал",
          en: "Clinical Laboratory Hematology",
        },
        nameEn: "Clinical Laboratory Hematology",
        eligibility: {
          mn: "Эмнэл зүйн эмгэг судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Clinical Pathology",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
    ],
  },
  {
    parent: {
      mn: "Эх барих эмэгтэйчүүд судлал",
      en: "Obstetrics & Gynecology",
    },
    rows: [
      {
        name: {
          mn: "Эмэгтэйчүүдийн дотоод шүүрэл, үргүйдэл судлал",
          en: "Reproductive Endocrinology and Infertility",
        },
        nameEn: "Reproductive Endocrinology and Infertility",
        eligibility: {
          mn: "Эх барих, эмэгтэйчүүд судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in OB/GYN",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: {
          mn: "Эмэгтэйчүүдийн аарцгийн хөндий судлал, нөхөн сэргээх мэс засал",
          en: "Female Pelvic Medicine and Reconstructive Surgery",
        },
        nameEn: "Female Pelvic Medicine and Reconstructive Surgery",
        eligibility: {
          mn: "Эх барих, эмэгтэйчүүд судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч; Бөөрний мэс засал судлалаар төрөлжсөн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in OB/GYN or subspecialization in Urological Surgery",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: {
          mn: "Эмэгтэйчүүдийн хавдар судлал",
          en: "Gynecologic Oncology",
        },
        nameEn: "Gynecologic Oncology",
        eligibility: {
          mn: "Эх барих, эмэгтэйчүүд судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in OB/GYN",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
    ],
  },
  {
    parent: { mn: "Био-Анагаах судлал", en: "Biomedical Sciences" },
    rows: [
      {
        name: { mn: "Анагаахын бичил амь судлал", en: "Medical Microbiology" },
        nameEn: "Medical Microbiology",
        eligibility: {
          mn: "Био-анагаахын мэргэжилтэн",
          en: "Biomedical specialist",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "Анагаахын дархлаа судлал", en: "Medical Immunology" },
        nameEn: "Medical Immunology",
        eligibility: {
          mn: "Био-анагаахын мэргэжилтэн",
          en: "Biomedical specialist",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: {
          mn: "Анагаахын молекул биологи судлал",
          en: "Medical Molecular Biology",
        },
        nameEn: "Medical Molecular Biology",
        eligibility: {
          mn: "Био-анагаахын мэргэжилтэн",
          en: "Biomedical specialist",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "Анагаахын удам зүй судлал", en: "Medical Genetics" },
        nameEn: "Medical Genetics",
        eligibility: {
          mn: "Био-анагаахын мэргэжилтэн",
          en: "Biomedical specialist",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: {
          mn: "Цус судлалын шинжилгээний технологи",
          en: "Blood Bank Technology",
        },
        nameEn: "Blood Bank Technology",
        eligibility: {
          mn: "Био-анагаахын мэргэжилтэн",
          en: "Biomedical specialist",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: {
          mn: "Цус цусан бүтээгдэхүүний үйлдвэрлэл технологи",
          en: "Blood Processing Technology",
        },
        nameEn: "Blood Processing Technology",
        eligibility: {
          mn: "Био-анагаахын мэргэжилтэн",
          en: "Biomedical specialist",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "Эс судлал", en: "Cytology" },
        nameEn: "Cytology",
        eligibility: {
          mn: "Био-анагаахын мэргэжилтэн",
          en: "Biomedical specialist",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
    ],
  },
  {
    parent: { mn: "Сэргээн засал судлал", en: "Rehabilitation Medicine" },
    rows: [
      {
        name: {
          mn: "Хүүхдийн сэргээн засал судлал",
          en: "Pediatric Rehabilitation",
        },
        nameEn: "Pediatric Rehabilitation",
        eligibility: {
          mn: "Сэргээн засал судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Rehabilitation Medicine",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: {
          mn: "Дотрын сэргээн засал судлал",
          en: "Internal Rehabilitation",
        },
        nameEn: "Internal Rehabilitation",
        eligibility: {
          mn: "Сэргээн засал судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Rehabilitation Medicine",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: {
          mn: "Мэдрэлийн сэргээн засал судлал",
          en: "Neurological Rehabilitation",
        },
        nameEn: "Neurological Rehabilitation",
        eligibility: {
          mn: "Сэргээн засал судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Rehabilitation Medicine",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: {
          mn: "Тулгуур эрхтэний сэргээн засал судлал",
          en: "Musculoskeletal Rehabilitation",
        },
        nameEn: "Musculoskeletal Rehabilitation",
        eligibility: {
          mn: "Сэргээн засал судлалаар үндсэн мэргэшил эзэмшсэн хүний их эмч",
          en: "MD with basic specialization in Rehabilitation Medicine",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
    ],
  },
  {
    parent: { mn: "Эм зүй", en: "Pharmacy" },
    rows: [
      {
        name: { mn: "Эмнэл зүйн эм зүй", en: "Clinical Pharmacy" },
        nameEn: "Clinical Pharmacy",
        eligibility: { mn: "Эм зүйч", en: "Pharmacist" },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "Эмийн технологи судлал", en: "Pharmaceutical Technology" },
        nameEn: "Pharmaceutical Technology",
        eligibility: { mn: "Эм зүйч", en: "Pharmacist" },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "Эмийн шинжилгээ судлал", en: "Drug Testing and Analysis" },
        nameEn: "Drug Testing and Analysis",
        eligibility: { mn: "Эм зүйч", en: "Pharmacist" },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: {
          mn: "Эм зүйн албаны зохион байгуулалт, менежмент",
          en: "Pharmacy Management",
        },
        nameEn: "Pharmacy Management",
        eligibility: { mn: "Эм зүйч", en: "Pharmacist" },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
    ],
  },
  {
    parent: { mn: "Нийгмийн эрүүл мэнд судлал", en: "Public Health" },
    rows: [
      {
        name: {
          mn: "Эрүүл мэндийн удирдлага, зохион байгуулалт",
          en: "Health Administration and Management",
        },
        nameEn: "Health Administration and Management",
        eligibility: {
          mn: "Эмнэлгийн мэргэжилтэн, бусад мэргэжилтэн (шалгуур хангавал); Нийгмийн эрүүл мэндийн мэргэжилтэн (шалгуур хангавал)",
          en: "Medical professional or Public Health specialist (if eligible)",
        },
        duration: "6 сар",
        credits: 46,
        tuition: 736000,
      },
      {
        name: {
          mn: "Хөдөлмөрийн эрүүл мэнд судлал",
          en: "Occupational Health",
        },
        nameEn: "Occupational Health",
        eligibility: {
          mn: "Нийгмийн эрүүл мэндийн мэргэжилтэн; Бакалавр ба түүнээс дээш зэрэгтэй эмнэлгийн мэргэжилтэн, бусад мэргэжилтэн (шалгуур хангавал)",
          en: "Public Health specialist; Bachelor's or higher medical professional (if eligible)",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "Хүнсний эрүүл ахуй судлал", en: "Food Hygiene" },
        nameEn: "Food Hygiene",
        eligibility: {
          mn: "Нийгмийн эрүүл мэндийн мэргэжилтэн; Бакалавр ба түүнээс дээш зэрэгтэй эмнэлгийн мэргэжилтэн, бусад мэргэжилтэн (шалгуур хангавал)",
          en: "Public Health specialist; Bachelor's or higher medical professional (if eligible)",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "Орчны эрүүл мэнд судлал", en: "Environmental Health" },
        nameEn: "Environmental Health",
        eligibility: {
          mn: "Нийгмийн эрүүл мэндийн мэргэжилтэн; Бакалавр ба түүнээс дээш зэрэгтэй эмнэлгийн мэргэжилтэн, бусад мэргэжилтэн (шалгуур хангавал)",
          en: "Public Health specialist; Bachelor's or higher medical professional (if eligible)",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "Биостатистик судлал", en: "Biostatistics" },
        nameEn: "Biostatistics",
        eligibility: {
          mn: "Нийгмийн эрүүл мэндийн мэргэжилтэн; Бакалавр ба түүнээс дээш зэрэгтэй эмнэлгийн мэргэжилтэн, бусад мэргэжилтэн (шалгуур хангавал)",
          en: "Public Health specialist; Bachelor's or higher medical professional (if eligible)",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "Эпидемиологи", en: "Epidemiology" },
        nameEn: "Epidemiology",
        eligibility: {
          mn: "Нийгмийн эрүүл мэндийн мэргэжилтэн; Бакалавр ба түүнээс дээш зэрэгтэй эмнэлгийн мэргэжилтэн, бусад мэргэжилтэн (шалгуур хангавал)",
          en: "Public Health specialist; Bachelor's or higher medical professional (if eligible)",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "Эрүүл мэндийн эдийн засаг судлал", en: "Health Economy" },
        nameEn: "Health Economy",
        eligibility: {
          mn: "Нийгмийн эрүүл мэндийн мэргэжилтэн; Бакалавр ба түүнээс дээш зэрэгтэй эмнэлгийн мэргэжилтэн, бусад мэргэжилтэн (шалгуур хангавал)",
          en: "Public Health specialist; Bachelor's or higher medical professional (if eligible)",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: { mn: "Эмнэлгийн менежмент", en: "Hospital Management" },
        nameEn: "Hospital Management",
        eligibility: {
          mn: "Эмнэлгийн мэргэжилтэн, бусад мэргэжилтэн (шалгуур хангавал); Нийгмийн эрүүл мэндийн мэргэжилтэн (шалгуур хангавал)",
          en: "Medical professional or Public Health specialist (if eligible)",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
      {
        name: {
          mn: "Эрүүл мэндийн тусламжийн чанар, аюулгүй байдал",
          en: "Hospital Quality and Safety",
        },
        nameEn: "Hospital Quality and Safety",
        eligibility: {
          mn: "Эмнэлгийн мэргэжилтэн, бусад мэргэжилтэн (шалгуур хангавал); Нийгмийн эрүүл мэндийн мэргэжилтэн (шалгуур хангавал)",
          en: "Medical professional or Public Health specialist (if eligible)",
        },
        duration: "6 сар",
        credits: 26,
        tuition: 416000,
      },
    ],
  },
];

/** Flat list of all programs with PDF links */
export interface TrainingProgram {
  name: LocalizedText;
  href: string;
}

const P = "http://postgraduate.mnums.edu.mn/wp-content/uploads";

export const trainingPrograms: TrainingProgram[] = [
  {
    name: { mn: "Анатомийн эмгэг судлал", en: "Anatomical Pathology" },
    href: `https://drive.google.com/file/d/1u84Vu3uaHSkYv8RyNYde-DpJ1aifvs4_/view?usp=drive_link`,
  },
  {
    name: { mn: "Гэмтэл согог судлал", en: "Traumatology" },
    href: `https://drive.google.com/file/d/1kT1K471gUk847BCRa1wz1tT5aBKvl82O/view?usp=drive_link`,
  },
  {
    name: { mn: "Дотрын анагаах судлал", en: "Internal Medicine" },
    href: `https://drive.google.com/file/d/1emIFVoDbHsgqXiSmsto8uX0aZsy_2HMs/view?usp=drive_link`,
  },
  {
    name: { mn: "Мэдрэл судлал", en: "Neurology" },
    href: `https://drive.google.com/file/d/1TwFX_6rn7bWSz_bPt_H2-P_TDCMQZTnz/view?usp=drive_link`,
  },
  {
    name: { mn: "Мэдээгүйжүүлэг судлал", en: "Anesthesiology" },
    href: `https://drive.google.com/file/d/1xeA7_MAlk4rHZWCzON8jC3FgLPDKlH-Q/view?usp=drive_link`,
  },
  {
    name: { mn: "Нүд судлал", en: "Ophthalmology" },
    href: `https://drive.google.com/file/d/1sMdmpsOXqv1sFl_AfWjglrB6qGkonljI/view?usp=drive_link`,
  },
  {
    name: { mn: "Өрхийн анагаах ухаан судлал", en: "Family Medicine" },
    href: `https://drive.google.com/file/d/1Vl3FKKBFbdw-DYCZmyQN3kdTGBst4M0i/view?usp=drive_link`,
  },
  {
    name: { mn: "Сүрьеэ судлал", en: "Phthisiology" },
    href: `${P}/2024/12/8.%D0%A1%D2%AF%D1%80%D1%8C%D0%B5%D1%8D-%D1%81%D1%83%D0%B4%D0%BB%D0%B0%D0%BB.pdf`,
  },
  {
    name: { mn: "Сэтгэц судлал", en: "Psychiatry" },
    href: `https://drive.google.com/file/d/1inOHlSG_JywMi8m1BgF_9t796T14c9j9/view?usp=drive_link`,
  },
  {
    name: { mn: "Хавдар судлал", en: "Oncology" },
    href: `https://drive.google.com/file/d/10w4vJ3mjwEujZIhoF9ey0SX7EXs_aCzq/view?usp=drive_link`,
  },
  {
    name: { mn: "Халдварт өвчин судлал", en: "Infectious Diseases" },
    href: `https://drive.google.com/file/d/1cQ7mr2WOVdZuyMx7SLe2nhNVMfo42s23/view?usp=drive_link`,
  },
  {
    name: { mn: "Хүүхэд судлал", en: "Pediatrics" },
    href: `https://drive.google.com/file/d/1zqXlrRwLasvehWnE2-fAQhjtpfDW7mur/view?usp=drive_link`,
  },
  {
    name: { mn: "Чих хамар хоолой судлал", en: "Otorhinolaryngology" },
    href: `https://drive.google.com/file/d/1iye2MX5c7-VwF5tsv2KOBvrujL959A9y/view?usp=drive_link`,
  },
  {
    name: { mn: "Шүүхийн анагаах ухаан судлал", en: "Forensic Medicine" },
    href: `https://drive.google.com/file/d/1rQLariIFFK7apPjOrLWi83AfEhP6XCtK/view?usp=drive_link`,
  },
  {
    name: { mn: "Эмнэлзүйн эмгэг судлал", en: "Clinical Pathology" },
    href: `https://drive.google.com/file/d/1Bx3zjDgztOC06Hj-qnBcK0COp9yTfPtD/view?usp=drive_link`,
  },
  {
    name: { mn: "Эрчимт эмчилгээ судлал", en: "Intensive Care Medicine" },
    href: `https://drive.google.com/file/d/1TNqUmd4evHBDKATNdaPHc2EcMfaDgsoH/view?usp=drive_link`,
  },
  {
    name: {
      mn: "Эх барих, эмэгтэйчүүдийн судлал",
      en: "Obstetrics & Gynecology",
    },
    href: `https://drive.google.com/file/d/1xrluJLMdvi93LmR7zkeCGUXg8f9jpDiP/view?usp=drive_link`,
  },
  {
    name: { mn: "Яаралтай тусламж судлал", en: "Emergency Medicine" },
    href: `https://drive.google.com/file/d/1XCs-wNbGWErTYkBEmVhAJeoJU6b7q6pI/view?usp=drive_link`,
  },
  {
    name: { mn: "Сэргээн засах судлал", en: "Rehabilitation Medicine" },
    href: `https://drive.google.com/file/d/1ZoHxrmcu9AR0Djr2mKSgUgrqCV46bWCv/view?usp=drive_link`,
  },
  // Traditional /бусад хасагдсан чиглэлүүдийг устгав
  {
    name: {
      mn: "Монголын уламжлалт, анагаах ухаан, зүү эмчилгээ судлал",
      en: "Mongolian Traditional Medicine, Acupuncture",
    },
    href: `#`,
  },
  // Dental
  {
    name: { mn: "Нүүр амны гажиг засал судлал", en: "Orthodontics" },
    href: `https://drive.google.com/file/d/1CO8FHMFrdmYuWB2SBK0EiZsfSvlmVskX/view?usp=drive_link`,
  },
  {
    name: { mn: "Нүүр амны согог засал судлал", en: "Prosthodontics" },
    href: `https://drive.google.com/file/d/1rgm1bADftuAeyBI7kIQkewsTAz2DXfln/view?usp=drive_link`,
  },
  {
    name: {
      mn: "Нүүр амны мэс засал судлал",
      en: "Oral & Maxillofacial Surgery",
    },
    href: `https://drive.google.com/file/d/1T9hePK4FklqcSEyrWG-kl1f7ahv11TkA/view?usp=drive_link`,
  },
  {
    name: { mn: "Шүдний тулгуур эд судлал", en: "Periodontics" },
    href: `https://drive.google.com/file/d/1XtdMKUl8bxmRGlbMskpb0AGoj0HSa5-v/view?usp=drive_link`,
  },
  {
    name: { mn: "Шүдний сувгийн эмчилгээ судлал", en: "Endodontics" },
    href: `https://drive.google.com/file/d/1qXdAOIkTHdr-R_Qm3X249fE3h8q9XIyh/view?usp=drive_link`,
  },
  {
    name: { mn: "Шүдний ерөнхий эмчилгээ судлал", en: "General Dentistry" },
    href: `https://drive.google.com/file/d/1TMxoIr4Xo_sEZDLgNCk3wk-k4In9l86D/view?usp=drive_link`,
  },
  {
    name: { mn: "Хүүхдийн нүүр ам судлал", en: "Pediatric Dentistry" },
    href: `https://drive.google.com/file/d/1yIoRHtSLz2pfSVpKl8jNl2lZWyNOWlGb/view?usp=drive_link`,
  },
];

/** Бааз эмнэлгүүд */
export const baseHospitals: LocalizedText[] = [
  { mn: "АШУҮИС МЯЭ", en: "MNUMS Mother and Child Hospital" },
  { mn: "АШУҮИС НАСТЭ", en: "MNUMS Geriatric Hospital" },
  { mn: "АШУҮИС Төв эмнэлэг", en: "MNUMS Central Hospital" },
  {
    mn: "Арьсны Өвчин Судлалын Үндэсний Төв",
    en: "National Center for Dermatology",
  },
  { mn: "Асралт мед эмнэлэг", en: "Asralt Med Hospital" },
  { mn: "Астма эмнэлэг", en: "Asthma Hospital" },
  {
    mn: "Баянгол Дүүргийн Эрүүл Мэндийн Төв",
    en: "Bayangol District Health Center",
  },
  {
    mn: "Баянзүрх Дүүргийн нэгдсэн эмнэлэг",
    en: "Bayanzurkh District General Hospital",
  },
  { mn: "Болор Мэлмий эмнэлэг", en: "Bolor Melmii Hospital" },
  { mn: "Бриллиант эмнэлэг", en: "Brilliant Hospital" },
  {
    mn: "Говь-Алтай аймгийн нэгдсэн эмнэлэг",
    en: "Gobi-Altai Province General Hospital",
  },
  {
    mn: "Говь-Алтай аймгийн эрүүл мэндийн газар",
    en: "Gobi-Altai Province Health Department",
  },
  { mn: "Гранд мед эмнэлэг", en: "Grand Med Hospital" },
  { mn: "Гурван Гал Эмнэлэг", en: "Gurvan Gal Hospital" },
  { mn: "Гэгээн мэлмий", en: "Gegeen Melmii" },
  { mn: "Гэмтэл Согог Судлалын Үндэсний Төв", en: "National Trauma Center" },
  {
    mn: "Дархан-Уул аймгийн нэгдсэн эмнэлэг",
    en: "Darkhan-Uul Province General Hospital",
  },
  {
    mn: "Дорноговь аймгийн нэгдсэн эмнэлэг",
    en: "Dornogobi Province General Hospital",
  },
  { mn: "Дорноговь ӨЭМТ", en: "Dornogobi Family Health Center" },
  { mn: "Зинт эмнэлэг", en: "Zint Hospital" },
  { mn: "Интермед эмнэлэг", en: "Intermed Hospital" },
  { mn: "Мөнгөн гүүр эмнэлэг", en: "Mungun Guur Hospital" },
  { mn: "Мэлтэс мед эмнэлэг", en: "Meltes Med Hospital" },
  { mn: "Натур мед сэргээн засах төв", en: "Natur Med Rehabilitation Center" },
  { mn: "Нийслэлийн Амгалан Амаржих газар", en: "Amgalan Maternity Hospital" },
  {
    mn: "Нийслэлийн Шүд Эрүү нүүрний төв",
    en: "Capital Dental & Maxillofacial Center",
  },
  { mn: "Нийслэлийн Өргөө Амаржих газар", en: "Urguu Maternity Hospital" },
  { mn: "Нийслэлийн Хүрээ Амаржих газар", en: "Khuree Maternity Hospital" },
  { mn: "Орбита эмнэлэг", en: "Orbita Hospital" },
  { mn: "Отгонтэнгэр эмнэлэг", en: "Otgontenger Hospital" },
  { mn: "Рехамед эмнэлэг", en: "Rehamed Hospital" },
  { mn: "Солонго эмнэлэг", en: "Solongo Hospital" },
  {
    mn: "Сонгинохайрхан Дүүргийн Нэгдсэн Эмнэлэг",
    en: "Songinokhairkhan District General Hospital",
  },
  { mn: "Сондра эмнэлэг", en: "Sondra Hospital" },
  {
    mn: "Стандарт хэмжилзүйн газар",
    en: "Standardization and Metrology Agency",
  },
  {
    mn: "Сүхбаатар дүүргийн эрүүл мэндийн төв",
    en: "Sukhbaatar District Health Center",
  },
  {
    mn: "Сэтгэцийн эрүүл мэндийн үндэсний төв",
    en: "National Center for Mental Health",
  },
  { mn: "Төгс Ялгуун эмнэлэг", en: "Tugs Yalguun Hospital" },
  {
    mn: "Төрийн тусгай албан хаагчдын нэгдсэн эмнэлэг",
    en: "State Special Service General Hospital",
  },
  { mn: "УБ Сонгдо эмнэлэг", en: "UB Songdo Hospital" },
  { mn: "Улсын Нэгдүгээр Төв Эмнэлэг", en: "First Central Hospital" },
  { mn: "Улсын Хоёрдугаар Төв Эмнэлэг", en: "Second Central Hospital" },
  { mn: "Хавдар Судлалын Үндэсний Төв", en: "National Cancer Center" },
];
