import React from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";
import Link from "next/link";
import {
  Grid,
  Card,
  Typography,
  Button,
  makeStyles,
  MenuItem,
  Select,
  InputLabel,
} from "@material-ui/core";
import TranslateIcon from "@material-ui/icons/Translate";

const SelectLanguage = () => {
  const router: any = useRouter();
  const classes = useStyles();
  const { t, lang } = useTranslation();

  const [langVal, setLangVal] = React.useState("en");

  React.useEffect(() => {
    console.log(lang);
  });
  return (
    <>
      <TranslateIcon className={classes.translateIcon} />

      <Select
        classes={{ root: classes.navbarItemTranslateSelect }}
        className={classes.select}
        disableUnderline
        value={lang}
      >
        {router.locales.map((locale: any) => {
          return (
            <MenuItem
              value={locale}
              onClick={() => {
                setLangVal(locale);
                console.log("changed to ", locale);
              }}
              key={locale}
            >
              {/* <Link href={router.asPath} locale={locale}>
                <Typography>{locale}</Typography>
              </Link> */}
              <div onClick={async () => await setLanguage(locale)}>
                {locale}
              </div>
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
};

const useStyles = makeStyles({
  navbarItemTranslateSelect: {
    color: "#fff",
    background: "#000",
    padding: "5px 5px",
    border: "1.5px solid #808080",
    borderRadius: 8,
    "&:focus": {
      backgroundColor: "#000",
      color: "#fff",
      border: "1.5px solid #808080",
      borderRadius: 8,
    },
  },
  select: {
    "&:after": {
      borderBottomColor: "#fff",
    },
    "& .MuiSvgIcon-root": {
      color: "#fff",
    },
  },
  translateIcon: {
    color: "#fff",
    marginTop: 2,
    marginRight: 10,
  },
});

export default SelectLanguage;
