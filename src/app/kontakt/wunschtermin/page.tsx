"use client";

import PageNavigation from "@/components/PageNavigation";
import { useEffect, useState } from "react";
import { wunschterminSchema } from "@/lib/validation/wunschtermin";

/* ================= TYPES ================= */

export type FormData = {
  firma: string;
  anrede: string;
  titel: string;
  vorname: string;
  nachname: string;
  email: string;
  telefon: string;
  versicherungsstatus: string;
  betreff: string;
  nachricht: string;
  transport: string;
  art: string;
  zieladresse: string;
  tag: string;
  zeitraum: string;
  leistungsbeschreibung: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

/* ================= INITIAL STATE ================= */

const initialFormData: FormData = {
  firma: "",
  anrede: "",
  titel: "",
  vorname: "",
  nachname: "",
  email: "",
  telefon: "",
  versicherungsstatus: "",
  betreff: "",
  nachricht: "",
  transport: "",
  art: "",
  zieladresse: "",
  tag: "",
  zeitraum: "",
  leistungsbeschreibung: "",
};

/* ================= FIELD COMPONENTS ================= */

const InputField = ({
                      label,
                      name,
                      value,
                      onChange,
                      required = false,
                      errors,
                      touched,
                      width = "w-full",
                    }: {
  label: string;
  name: keyof FormData;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  errors?: FormErrors;
  touched?: Partial<Record<keyof FormData, boolean>>;
  width?: string;
}) => {
  const error = touched?.[name] && errors?.[name];

  return (
    <div className={width}>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`${label}${required ? "*" : ""}`}
        className={`w-full border-b bg-transparent py-2 font-light text-black focus:outline-none
          ${error ? "border-red-500" : "border-gray-400 focus:border-black"}
        `}
      />
      {error && <p className="text-sm text-red-500 mt-1">{errors![name]}</p>}
    </div>
  );
};

const TextField = ({
                     label,
                     name,
                     value,
                     onChange,
                     required = false,
                     errors,
                     touched,
                   }: {
  label: string;
  name: keyof FormData;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  errors?: FormErrors;
  touched?: Partial<Record<keyof FormData, boolean>>;
}) => {
  const error = touched?.[name] && errors?.[name];

  return (
    <div>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={1}
        placeholder={`${label}${required ? "*" : ""}`}
        className={`w-full border-b bg-transparent py-2 font-light text-black focus:outline-none
          ${error ? "border-red-500" : "border-gray-400 focus:border-black"}
        `}
      />
      {error && <p className="text-sm text-red-500 mt-1">{errors![name]}</p>}
    </div>
  );
};

const SelectField = ({
                       label,
                       name,
                       value,
                       values,
                       onChange,
                       required = false,
                       errors,
                       touched
                     }: {
  label: string;
  name: keyof FormData;
  value: string;
  values: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  errors?: FormErrors;
  touched?: Partial<Record<keyof FormData, boolean>>;
}) => {
  const error = touched?.[name] && errors?.[name];

  return (
    <div className="w-full">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full border-b py-2 text-black/60 focus:outline-none placeholder:text-black/60 font-light bg-transparent
          ${error ? "border-red-500" : "border-gray-400 focus:border-black"}
        `}
      >
        <option value="" hidden>
          {label}
          {required ? "*" : ""}
        </option>
        {values.map((v) => (
          <option key={v} value={v}>
            {v}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-red-500 mt-1">{errors![name]}</p>}
    </div>
  );
};

const RadioGroup = ({
                      label,
                      name,
                      value,
                      options,
                      onChange,
                      required = false,
                      errors,
                      touched
                    }: {
  label: string;
  name: keyof FormData;
  value: string;
  options: string[];
  onChange: (name: keyof FormData, value: string) => void;
  required?: boolean;
  errors?: FormErrors;
  touched?: Partial<Record<keyof FormData, boolean>>;
}) => {
  const error = touched?.[name] && errors?.[name];

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center gap-4 py-2 border-b border-gray-400 w-full">
        <span className="min-w-[140px] text-black/80 font-light">
          {label}
          {required ? "*" : ""}
        </span>
        <div className="flex gap-2 flex-wrap ml-auto">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => onChange(name, opt)}
              className={`cursor-pointer px-3 py-1 border text-sm md:-mb-3
                ${opt === value ? "border-black font-bold" : "border-gray-400"}
              `}
            >
              {opt}
            </div>
          ))}
        </div>
      </div>
      {error && <p className="text-sm text-red-500 mt-1">{errors![name]}</p>}
    </div>
  );
};

/* ================= PAGE ================= */

export default function Wunschtermin() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormData, boolean>>
  >({});


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleChangeCustom = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  /* ---------- LIVE VALIDATION ---------- */

  useEffect(() => {
    setSuccess(false);
    const result = wunschterminSchema.safeParse(formData);
    if (!result.success) {
      const flattened = result.error.flatten();
      const nextErrors: FormErrors = {};
      for (const key in flattened.fieldErrors) {
        const msg = flattened.fieldErrors[key]?.[0];
        if (msg) nextErrors[key as keyof FormData] = msg;
      }
      setErrors(nextErrors);
    } else {
      setErrors({});
    }
  }, [formData]);

  /* ---------- SUBMIT ---------- */

  const handleSubmit = async () => {
    const allTouched: Partial<Record<keyof FormData, boolean>> = {};
    (Object.keys(formData) as (keyof FormData)[]).forEach(
      (key) => (allTouched[key] = true)
    );
    setTouched(allTouched);

    if (Object.keys(errors).length > 0) return;

    setIsSubmitting(true);
    await fetch("/api/wunschtermin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setIsSubmitting(false);
    setFormData(initialFormData);
    setTouched({});
    setSuccess(true);
  };

  return (
    <>
      <PageNavigation navId="kontakt" />

      <div className="container mx-auto max-w-[800px] px-4 py-10 flex flex-col gap-4">

        {success && (<div className="bg-green-800/90 text-white rounded p-2 text-center">Nachricht erfolgreich gesendet!</div>)}

        <InputField label="Firma" name="firma" value={formData.firma} onChange={handleChange} errors={errors} touched={touched} />

        <div className="flex gap-6">
          <SelectField label="Anrede" name="anrede" values={["Herr", "Frau", "Divers"]} value={formData.anrede} onChange={handleChange} errors={errors} touched={touched} />
          <InputField label="Titel" name="titel" value={formData.titel} onChange={handleChange} errors={errors} touched={touched} />
        </div>

        <div className="flex gap-6">
          <InputField label="Vorname" name="vorname" value={formData.vorname} onChange={handleChange} required errors={errors} touched={touched} />
          <InputField label="Nachname" name="nachname" value={formData.nachname} onChange={handleChange} required errors={errors} touched={touched} />
        </div>

        <div className="flex gap-6">
          <InputField label="E-Mail" name="email" value={formData.email} onChange={handleChange} required errors={errors} touched={touched} />
          <InputField label="Telefon" name="telefon" value={formData.telefon} onChange={handleChange} errors={errors} touched={touched} />
        </div>

        <RadioGroup
          label="Versicherungsstatus"
          name="versicherungsstatus"
          value={formData.versicherungsstatus}
          options={["Gesetzlich versichert", "Privat versichert"]}
          onChange={handleChangeCustom}
          required
          errors={errors} touched={touched}
        />

        <TextField label="Betreff" name="betreff" value={formData.betreff} onChange={handleChange} required errors={errors} touched={touched} />
        <TextField label="Nachricht" name="nachricht" value={formData.nachricht} onChange={handleChange} required errors={errors} touched={touched} />

        <h3 className="font-bold border-b border-gray-400 pb-2 mt-6">
          Mein Wunschtermin für folgende Leistung
        </h3>

        <RadioGroup
          label="Transport"
          name="transport"
          value={formData.transport}
          options={["im Rollstuhl", "im Tragestuhl", "Liegend", "ohne Bewegungshilfe"]}
          onChange={handleChangeCustom}
          errors={errors} touched={touched}
        />

        <TextField label="Art der Leistung" name="art" value={formData.art} onChange={handleChange} errors={errors} touched={touched} />
        <TextField label="Zieladresse" name="zieladresse" value={formData.zieladresse} onChange={handleChange} errors={errors} touched={touched} />

        <div className="flex gap-6">
          <InputField label="Tag" name="tag" value={formData.tag} onChange={handleChange} errors={errors} touched={touched} />
          <InputField label="Zeitraum" name="zeitraum" value={formData.zeitraum} onChange={handleChange} errors={errors} touched={touched} />
        </div>

        <TextField
          label="Leistungsbeschreibung"
          name="leistungsbeschreibung"
          value={formData.leistungsbeschreibung}
          onChange={handleChange}
          errors={errors} touched={touched}
        />

        <div className="flex justify-end mt-4">
          <button
            disabled={isSubmitting}
            onClick={handleSubmit}
            className={`font-bold underline italic ${
              isSubmitting ? "opacity-40 cursor-not-allowed" : "hover:no-underline"
            }`}
          >
            Absenden
          </button>
        </div>

      </div>
    </>
  );
}
