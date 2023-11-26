import React, { useCallback, useMemo, useRef } from "react";
import GorhomBottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { Portal } from "@gorhom/portal";

const BottomSheet = ({ isOpen, onClose, children }) => {
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  const portalName = useMemo(() => `bottom-sheet-${Math.random()}`, []);

  const sheetRef = useRef();

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        onPress={onClose}
      />
    ),
    []
  );

  return (
    <Portal name={portalName}>
      <GorhomBottomSheet
        ref={sheetRef}
        index={isOpen ? 1 : -1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
        handleIndicatorStyle={{ backgroundColor: "grey" }}
      >
        {children}
      </GorhomBottomSheet>
    </Portal>
  );
};
export default BottomSheet;
